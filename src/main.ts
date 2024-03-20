import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExcePtionFilter } from './common/filters/http-exception.filter';
import { TimeoutError } from 'rxjs';
import { TimeOutInterceptor } from './interceptors/timeout.interceptors';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //para que funcione
  app.useGlobalFilters(new AllExcePtionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());


  const opciones = new DocumentBuilder()
    .setTitle('Empleado API')
    .setDescription('Documentacion de Empleado API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, opciones);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(3000);

}
bootstrap();
