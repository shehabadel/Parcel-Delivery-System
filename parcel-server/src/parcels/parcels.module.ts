import { Module } from '@nestjs/common';
import { ParcelsService } from './parcels.service';
import { ParcelsController } from './parcels.controller';
import { ParcelRepository } from '../database/models/parcel/parcel.repository';
import { SendersModule } from 'src/senders/senders.module';
import { BikersModule } from 'src/bikers/bikers.module';

@Module({
  controllers: [ParcelsController],
  providers: [ParcelsService, ParcelRepository],
  imports:[SendersModule,BikersModule]
})
export class ParcelsModule {}
