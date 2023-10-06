import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BikersService } from 'src/bikers/bikers.service';
import { SendersService } from 'src/senders/senders.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly sendersService: SendersService,
        private readonly bikersService: BikersService,
        private readonly jwtService: JwtService
    ) { }

    public signIn(email: string, password: string, type: string) {
        if (type === 'SENDER') {
            var sender = this.sendersService.findByEmail(email)
            if (!sender) {
                throw new NotFoundException('Sender not found')
            }
            if (sender?.password !== password) {
                throw new UnauthorizedException()
            }
            const payload = { sub: sender.id, username: sender.email, type:'sender' };
            return {
                access_token: this.jwtService.sign(payload),
            }
        }
        else if (type === 'BIKER') {
            const biker = this.bikersService.findByEmail(email)
            if (!biker) {
                throw new NotFoundException('biker not found')
            }
            if (biker?.password !== password) {
                throw new UnauthorizedException()
            }
            const payload = { sub: biker.id, username: biker.email, type:'biker' };
            return {
                access_token: this.jwtService.sign(payload),
            }
        }
        else {
            throw new NotFoundException()
        }
    }
}
