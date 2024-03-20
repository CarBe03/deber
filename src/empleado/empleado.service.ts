import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InterEmpleado } from './empleado.interface';
import { EMPLEADO } from 'src/models/models';
import { v4 as uuidV4 } from 'uuid';
import { EmpleadoDTO } from './dto/empleado.dto';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectModel(EMPLEADO.name) private readonly model: Model<InterEmpleado>,
  ) {}

  async insertar(empleadoDTO: EmpleadoDTO): Promise<InterEmpleado> {
    const newEmpleado = new this.model(empleadoDTO);
    return await newEmpleado.save();
  }
  async todos(): Promise<InterEmpleado[]> {
    return await this.model.find();
  }
  async uno(id: string): Promise<InterEmpleado> {
    return await this.model.findById(id);
  }
  async actualizar(
    id: string,
    empleadoDTO: EmpleadoDTO,
  ): Promise<InterEmpleado> {
    return await this.model.findByIdAndUpdate(id, empleadoDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Empleado Eliminado' };
  }
}