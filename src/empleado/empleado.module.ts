import { Module } from '@nestjs/common';
import { EmpleadoController } from './empleado.controller';
import { EmpleadoService } from './empleado.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EMPLEADO } from 'src/models/models';
import { EmpleadoSchema } from './schema/empleado.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: EMPLEADO.name,
        useFactory: () => {
          return EmpleadoSchema;
        },
      },
    ]),
  ],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule {}
