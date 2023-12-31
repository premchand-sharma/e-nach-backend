import { Test, TestingModule } from '@nestjs/testing';
import { ThirdPartyController } from './third-party.controller';

describe('ThirdPartyController', () => {
  let controller: ThirdPartyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThirdPartyController],
    }).compile();

    controller = module.get<ThirdPartyController>(ThirdPartyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
