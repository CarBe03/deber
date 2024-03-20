import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoDTO } from './dto/empleado.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Empleado')
@Controller('api/v2/empleado')
export class EmpleadoController {
  constructor(private empleadoServicio: EmpleadoService) {}

  @Post()
  insertar(@Body() EmpleadoDTO: EmpleadoDTO) {
    return this.empleadoServicio.insertar(EmpleadoDTO);
  }
  @Get()
  todos() {
    return this.empleadoServicio.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.empleadoServicio.uno(id);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() EmpleadoDTO: EmpleadoDTO) {
    return this.empleadoServicio.actualizar(id, EmpleadoDTO);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.empleadoServicio.eliminar(id);
  }
}
