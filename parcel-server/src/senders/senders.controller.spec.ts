import { Test, TestingModule } from '@nestjs/testing';
import { SendersController } from './senders.controller';
import { SendersService } from './senders.service';

describe('SendersController', () => {
  let controller: SendersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendersController],
      providers: [SendersService],
    }).compile();

    controller = module.get<SendersController>(SendersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
