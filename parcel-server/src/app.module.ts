import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendersModule } from './senders/senders.module';
import { BikersModule } from './bikers/bikers.module';
import { ParcelsModule } from './parcels/parcels.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SendersModule, BikersModule, ParcelsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
