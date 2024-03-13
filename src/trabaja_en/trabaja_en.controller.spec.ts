import { Test, TestingModule } from '@nestjs/testing';
import { TrabajaEnController } from './trabaja_en.controller';

describe('TrabajaEnController', () => {
  let controller: TrabajaEnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrabajaEnController],
    }).compile();

    controller = module.get<TrabajaEnController>(TrabajaEnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
