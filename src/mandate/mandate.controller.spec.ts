import { Test, TestingModule } from '@nestjs/testing';
import { MandateController } from './mandate.controller';

describe('MandateController', () => {
  let controller: MandateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MandateController],
    }).compile();

    controller = module.get<MandateController>(MandateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
