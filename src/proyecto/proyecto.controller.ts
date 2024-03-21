import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProyectoService } from './proyecto.service';
import { ProyectoDTO } from './dto/proyecto.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('proyecto')
@Controller('api/v2/proyecto')
export class ProyectoController {
  constructor(private proyectoServicio: ProyectoService) {}

  @Post()
  insertar(@Body() ProyectoDTO: ProyectoDTO) {
    return this.proyectoServicio.insertar(ProyectoDTO);
  }
  @Get()
  todos() {
    return this.proyectoServicio.todos();
  }

  @Get(':id_proyecto')
  uno(@Param('id_proyecto') id_proyecto: string) {
    return this.proyectoServicio.uno(id_proyecto);
  }
  @Put(':id_proyecto')
  actualizar(@Param('id_proyecto') id_proyecto: string, @Body() ProyectoDTO: ProyectoDTO) {
    return this.proyectoServicio.actualizar(id_proyecto, ProyectoDTO);
  }
  @Delete(':id_proyecto')
  eliminar(@Param('id_proyecto') id_proyecto: string) {
    return this.proyectoServicio.eliminar(id_proyecto);
  }
}