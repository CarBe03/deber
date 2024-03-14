import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TrabajaEnService } from './trabaja_en.service';
import { InterTrabajaen } from './trabaja_en.interface';
import { TrabajaenDTO } from './trabaja_en.dto';

@Controller('trabaja-en')
export class TrabajaEnController {
    constructor(private TrabajaenServicio: TrabajaEnService) {}

  @Get()
  todos() {
    return this.TrabajaenServicio.todos();
  }

  @Get(':id_trabajo')
  uno(@Param('id_trabajo') id_trabajo: string) {
    return this.TrabajaenServicio.uno(id_trabajo);
  }
  @Post()
  insertar(@Body() trabaja_en: TrabajaenDTO) {
    return this.TrabajaenServicio.insertar(trabaja_en);
  }
  @Put(':id')
  actualizar(@Param('id_trabajo') id_trabajo: string, @Body() trabaja_en: TrabajaenDTO) {
    return this.TrabajaenServicio.actualizar(id_trabajo, trabaja_en);
  }
  @Delete(':id_trabajo')
  eliminar(@Param('id_trabajo') id_trabajo: string) {
    return this.TrabajaenServicio.eliminar(id_trabajo);
  }
}
