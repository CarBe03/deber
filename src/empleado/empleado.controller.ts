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
import { EmpleadoService } from './empleado.service';
import { InterEmpleado } from './empleado.interface';
import { EmpleadoDTO } from './empleado.dto';
@Controller('empleado')
export class EmpleadoController {
  constructor(private empleadoServicio: EmpleadoService) {}

  @Get()
  todos() {
    return this.empleadoServicio.todos();
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.empleadoServicio.uno(id);
  }
  @Post()
  insertar(@Body() empleado: EmpleadoDTO) {
    return this.empleadoServicio.insertar(empleado);
  }
  @Put(':id')
  actualizar(@Param('id') id: string, @Body() empleado: EmpleadoDTO) {
    return this.empleadoServicio.actualizar(id, empleado);
  }
  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.empleadoServicio.eliminar(id);
  }
}
