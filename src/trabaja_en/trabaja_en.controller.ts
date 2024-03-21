import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TrabajaEnService } from './trabaja_en.service';
//import { ProyectoService } from 'src/proyecto/proyecto.service';
import { EmpleadoService} from 'src/empleado/empleado.service';
import { TrabajaenDTO } from './dto/trabaja_en.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('trabaja_en')
@Controller('api/v1/trabaja_en')
export class TrabajaEnController {
    constructor(
      private readonly trabajaEnService: TrabajaEnService,
      //private readonly proyectoService: ProyectoService,
      private readonly empleadoService: EmpleadoService,
    ) {}
    @Post()
    @ApiOperation({ summary: 'Crea Trabajos' })
    insertar(@Body() trabajaenDTO: TrabajaenDTO) {
      return this.trabajaEnService.insertar(trabajaenDTO);
    }
    @Get()
    @ApiOperation({ summary: 'Selecciona todos los Proyectos' })
    todos() {
      return this.trabajaEnService.todos();
    }
    @Get(':id_trabajo')
    uno(@Param('id_trabajo') id_trabajo: string) {
      return this.trabajaEnService.uno(id_trabajo);
    }
    @Put(':id_trabajo')
    actualizar(@Param('id_trabajo') id_trabajo: string, @Body() trabajaenDTO: TrabajaenDTO) {
      return this.trabajaEnService.actualizar(id_trabajo, trabajaenDTO);
    }
    @Delete(':id_trabajo')
    eliminar(@Param('id_trabajo') id_trabajo: string) {
      return this.trabajaEnService.eliminar(id_trabajo);
    }
    @Post(':trabaja_enId/empleado/:empleadoId')
    async agregarEmpleado(
      @Param('trabaja_enId') trabaja_enId: string,
      @Param('empleadoId') empleadoId: string,
    ) {
      const empleado = await this.empleadoService.uno(empleadoId);
      if (!empleado)
        throw new HttpException('Empleado not found', HttpStatus.NOT_FOUND);
      return this.trabajaEnService.insertarEmpleado(trabaja_enId, empleadoId);
    }
  }