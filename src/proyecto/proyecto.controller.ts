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
import { ProyectoService } from './proyecto.service';
import { InterProyecto } from './proyecto.interface';
import { ProyectoDTO } from './proyecto.dto';

@Controller('proyecto')
export class ProyectoController {
  constructor(private proyectoServicio: ProyectoService) {}

  @Get()
  todos() {
    return this.proyectoServicio.todos();
  }

  @Get(':id_proyecto')
  uno(@Param('id_proyecto') id_proyecto: string) {
    return this.proyectoServicio.uno(id_proyecto);
  }
  @Post()
  insertar(@Body() proyecto: ProyectoDTO) {
    return this.proyectoServicio.insertar(proyecto);
  }
  @Put(':id')
  actualizar(@Param('id_proyecto') id_proyecto: string, @Body() proyecto: ProyectoDTO) {
    return this.proyectoServicio.actualizar(id_proyecto, proyecto);
  }
  @Delete(':id_proyecto')
  eliminar(@Param('id_proyecto') id_proyecto: string) {
    return this.proyectoServicio.eliminar(id_proyecto);
  }
}
