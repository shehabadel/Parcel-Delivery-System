import { Injectable } from '@nestjs/common';
import { CreateParcelDto } from './dto/create-parcel.dto';
import { UpdateParcelDto } from './dto/update-parcel.dto';
import { ParcelRepository } from 'src/database/models/parcel/parcel.repository';
import { SendersService } from 'src/senders/senders.service';
import { BikersService } from 'src/bikers/bikers.service';
import { Parcel } from './entities/parcel.entity';

@Injectable()
export class ParcelsService {
  private readonly sendersService: SendersService
  private readonly bikerService: BikersService
  constructor(private readonly parcelRepository: ParcelRepository){}

  create(createParcelDto: CreateParcelDto) {
    const sender = this.sendersService.findOne(createParcelDto.senderId);
    
    if (!sender) {
      throw new Error('Sender not found');
    }

    const parcel:CreateParcelDto ={
      senderId: createParcelDto.senderId,
      pickupAddress: createParcelDto.pickupAddress,
      dropoffAddress: createParcelDto.dropoffAddress,
      status: 'Pending', // Initial status
      bikerId: null,
      pickupTime: null, 
      deliveryTime: null, 
    }

    return this.parcelRepository.create(parcel)
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

  findParcelsBySenderId(id:number){
    const sender = this.sendersService.findOne(id);
    
    if (!sender) {
      throw new Error('Sender not found');
    }

    const parcels = this.parcelRepository.findBySenderId(id)

    return parcels
  }

  findParcelsByBikerId(id:number){
    const biker = this.bikerService.findOne(id);
    
    if (!biker) {
      throw new Error('Biker not found');
    }

    const parcels = this.parcelRepository.findByBikerId(id)

    return parcels
  }

  getParcelStatus(id:number){
    const parcel:Parcel = this.findOne(id)
    if(!parcel){
      throw new Error('Parcel not found')
    }
    return parcel.status
  }

  updateParcelStatus(parcelId: number, status: string) {
    const updatedParcel = this.parcelRepository.update(parcelId, { status });    
    return updatedParcel;
  }
}
