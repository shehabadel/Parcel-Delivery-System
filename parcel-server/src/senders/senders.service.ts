import { Injectable } from '@nestjs/common';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { SendersRepository } from '../database/models/sender/senders.repository';

@Injectable()
export class SendersService {
  constructor(private readonly senderRepository:SendersRepository){}
  public create(createSenderDto: CreateSenderDto) {
    return this.senderRepository.create(createSenderDto)
  }

  public findAll() {
    return this.senderRepository.findAll()
  }

  public findOne(id: number) {
    return this.senderRepository.findById(id)
  }

  public update(id: number, updateSenderDto: UpdateSenderDto) {

    return this.senderRepository.update(id,updateSenderDto)
  }

  public remove(id: number) {
    return this.senderRepository.delete(id)
  }
  public findByEmail(email:string){
    return this.senderRepository.findByEmail(email)
  }
}
