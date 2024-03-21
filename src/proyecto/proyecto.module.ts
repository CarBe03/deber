import { Module } from '@nestjs/common';
import { ProyectoController } from './proyecto.controller';
import { ProyectoService } from './proyecto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PROYECTO } from 'src/models/models';
import { ProyectoSchema } from './schema/proyecto.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: PROYECTO.name,
        useFactory: () => {
          return ProyectoSchema;
        },
      },
    ]),
  ],
  controllers: [ProyectoController],
  providers: [ProyectoService]
})
export class ProyectoModule {}
