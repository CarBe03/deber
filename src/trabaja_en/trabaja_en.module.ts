import { Module } from '@nestjs/common';
import { TrabajaEnController } from './trabaja_en.controller';
import { TrabajaEnService } from './trabaja_en.service';

@Module({
  controllers: [TrabajaEnController],
  providers: [TrabajaEnService]
})
export class TrabajaEnModule {}
