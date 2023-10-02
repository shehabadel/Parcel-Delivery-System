import { Injectable } from '@nestjs/common';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { SendersRepository } from '../database/models/sender/senders.repository';

@Injectable()
export class SendersService {
  constructor(private readonly senderRepository:SendersRepository){}
  create(createSenderDto: CreateSenderDto) {
    return this.senderRepository.create(createSenderDto)
  }

  findAll() {
    return this.senderRepository.findAll()
  }

  findOne(id: number) {
    return this.senderRepository.findById(id)
  }

  update(id: number, updateSenderDto: UpdateSenderDto) {

    return this.senderRepository.update(id,updateSenderDto)
  }

  remove(id: number) {
    return this.senderRepository.delete(id)
  }
}
