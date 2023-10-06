import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SendersModule } from 'src/senders/senders.module';
import { BikersModule } from 'src/bikers/bikers.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    SendersModule,
    BikersModule,
    JwtModule.register({
      global:true,
      secret:jwtConstants.secret,
      signOptions:{expiresIn:'7d'}
    })
  ]
})
export class AuthModule {}
