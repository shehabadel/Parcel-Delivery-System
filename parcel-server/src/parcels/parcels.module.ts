import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { ParcelRepository } from '../database/models/parcel/parcel.repository';
import { SendersService } from '../senders/senders.service';
import { BikersService } from 'src/bikers/bikers.service';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService, ParcelRepository],
})
export class ParcelsModule {}
