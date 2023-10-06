import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { BikersService } from 'src/bikers/bikers.service';
import { SendersService } from 'src/senders/senders.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly sendersService:SendersService,
        private readonly bikersService:BikersService
    ){}

    public signIn(email:string,password:string, type:string){
        if(type==='SENDER'){
            const sender = this.sendersService.findByEmail(email)
            if(!sender){
                throw new Error('Sender not found')
            }
            if(sender?.password!==password){
                throw new UnauthorizedException()
            }
            const token = `sender-auth-token.${sender.id}.${new Date().toISOString()}`
            return token
        }
        else if(type==='BIKER'){
            const biker = this.bikersService.findByEmail(email)
            if(!biker){
                throw new Error('biker not found')
            }
            if(biker?.password!==password){
                throw new UnauthorizedException()
            }
            const token = `biker-auth-token.${biker.id}.${new Date().toISOString()}`
            return token
        }
        else{
            throw new NotFoundException()
        }
    }
}
