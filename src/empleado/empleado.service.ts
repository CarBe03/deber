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
  insertar(EmpleadoDTO: EmpleadoDTO): Promise<InterEmpleado> {
    const nuevoEmpleado = new this.model(EmpleadoDTO);
    return nuevoEmpleado.save();
  }
  todos(): Promise<InterEmpleado[]> {
    return this.model.find().populate('empleado');
  }
  uno(id: string): Promise<InterEmpleado> {
    return this.model.findById(id).populate('empleado');
  }
  actualizar(id: string, EmpleadoDTO: EmpleadoDTO): Promise<InterEmpleado> {
    return this.model.findByIdAndUpdate(id, EmpleadoDTO, { new: true });
  }
  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Empleado eliminado' };
  }
  async insertarEmpleado(
    vueloId: string,
    passengerId: string,
  ): Promise<InterEmpleado> {
    return await this.model
      .findByIdAndUpdate(
        vueloId,
        { $addToSet: { passengers: passengerId } },
        { new: true },
      )
      .populate('passengers');
  }
}