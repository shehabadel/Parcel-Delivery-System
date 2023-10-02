import { Injectable } from '@nestjs/common';
import { CreateBikerDto } from './dto/create-biker.dto';
import { UpdateBikerDto } from './dto/update-biker.dto';
import { BikerRepository } from 'src/database/models/biker/biker.repository';

@Injectable()
export class BikersService {
  constructor(private readonly bikerRepository:BikerRepository){}

  create(createBikerDto: CreateBikerDto) {
    return this.bikerRepository.create(createBikerDto);
  }

  findAll() {
    return this.bikerRepository.findAll()
  }

  findOne(id: number) {
    return this.bikerRepository.findById(id)
  }

  update(id: number, updateBikerDto: UpdateBikerDto) {
    return this.bikerRepository.update(id,updateBikerDto)
  }

  remove(id: number) {
    return this.bikerRepository.delete(id)
  }
}
