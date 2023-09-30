import { Module } from '@nestjs/common';
import { BikersService } from './bikers.service';
import { BikersController } from './bikers.controller';

@Module({
  controllers: [BikersController],
  providers: [BikersService],
})
export class BikersModule {}
