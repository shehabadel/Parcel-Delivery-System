import { Module } from '@nestjs/common';
import { BikersService } from './bikers.service';
import { BikersController } from './bikers.controller';
import { BikerRepository } from 'src/database/models/biker/biker.repository';

@Module({
  controllers: [BikersController],
  providers: [BikersService, BikerRepository],
})
export class BikersModule {}
