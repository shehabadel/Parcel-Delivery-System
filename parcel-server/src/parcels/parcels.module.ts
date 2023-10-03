import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { ParcelRepository } from 'src/database/models/parcel/parcel.repository';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService, ParcelRepository],
})
export class ParcelsModule {}
