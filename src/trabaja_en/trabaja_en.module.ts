import { Module } from '@nestjs/common';
import { TrabajaEnController } from './trabaja_en.controller';
import { TrabajaEnService } from './trabaja_en.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TRABAJA_EN } from 'src/models/models';
import { Trabaja_enSchema } from './schema/trabaja_en.schema';
import { EmpleadoModule } from 'src/empleado/empleado.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TRABAJA_EN.name,
        useFactory: () =>
          Trabaja_enSchema.plugin(require('mongoose-autopopulate')),
      },
    ]),
    EmpleadoModule,
  ],
  controllers: [TrabajaEnController],
  providers: [TrabajaEnService],
})
export class TrabajaEnModule {}
