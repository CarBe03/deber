import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProyectoModule } from './proyecto/proyecto.module';
import { TrabajaEnModule } from './trabaja_en/trabaja_en.module';
import {MongooseModule} from'@nestjs/mongoose';
import {ConfigModule} from'@nestjs/config';


@Module({


  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env.development',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.uri_mongo),
    EmpleadoModule,
    ProyectoModule,
    TrabajaEnModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

  
