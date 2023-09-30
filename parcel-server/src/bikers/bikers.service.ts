import { Injectable } from '@nestjs/common';
import { CreateBikerDto } from './dto/create-biker.dto';
import { UpdateBikerDto } from './dto/update-biker.dto';

@Injectable()
export class BikersService {
  create(createBikerDto: CreateBikerDto) {
    return 'This action adds a new biker';
  }

  findAll() {
    return `This action returns all bikers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biker`;
  }

  update(id: number, updateBikerDto: UpdateBikerDto) {
    return `This action updates a #${id} biker`;
  }

  remove(id: number) {
    return `This action removes a #${id} biker`;
  }
}
