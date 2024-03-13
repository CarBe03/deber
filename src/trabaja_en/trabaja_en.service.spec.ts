import { Test, TestingModule } from '@nestjs/testing';
import { TrabajaEnService } from './trabaja_en.service';

describe('TrabajaEnService', () => {
  let service: TrabajaEnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrabajaEnService],
    }).compile();

    service = module.get<TrabajaEnService>(TrabajaEnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
