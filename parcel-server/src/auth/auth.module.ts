import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SendersModule } from 'src/senders/senders.module';
import { BikersModule } from 'src/bikers/bikers.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[SendersModule,BikersModule]
})
export class AuthModule {}
