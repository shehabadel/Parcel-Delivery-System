import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { ParcelRepository } from 'src/database/models/parcel/parcel.repository';

@Injectable()
export class ParcelsService {
  constructor(private readonly parcelRepository: ParcelRepository){}

  create(createParcelDto: CreateParcelDto) {
    return this.parcelRepository.create(createParcelDto)
  }

  findAll() {
    return this.parcelRepository.findAll()
  }

  findOne(id: number) {
    return this.parcelRepository.findById(id)
  }

  update(id: number, updateParcelDto: UpdateParcelDto) {
    return this.parcelRepository.update(id,updateParcelDto)
  }

  remove(id: number) {
    return this.parcelRepository.delete(id)
  }
}
