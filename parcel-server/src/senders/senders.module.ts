import { Module } from '@nestjs/common';
import { SendersService } from './senders.service';
import { SendersController } from './senders.controller';
import { SendersRepository } from '../database/models/sender/senders.repository';

@Module({
  controllers: [SendersController],
  providers: [SendersService,SendersRepository],
  exports:[SendersService, SendersRepository]
})
export class SendersModule {}
