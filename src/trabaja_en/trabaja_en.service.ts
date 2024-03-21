import { HttpStatus, Injectable } from '@nestjs/common';
import { InterTrabajaen } from './trabaja_en.interface';
import { TrabajaenDTO } from './dto/trabaja_en.dto';
import { TRABAJA_EN } from 'src/models/models';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TrabajaEnService {
  constructor(
    @InjectModel(TRABAJA_EN.name) private readonly model: Model<InterTrabajaen>,
  ) {}
  insertar(trabajaenDTO: TrabajaenDTO): Promise<InterTrabajaen> {
    const nuevoTrabajo = new this.model(trabajaenDTO);
    return nuevoTrabajo.save();
  }
  todos(): Promise<InterTrabajaen[]> {
    return this.model.find().populate('Trabajo');
  }
  uno(id_trabajo: string): Promise<InterTrabajaen> {
    return this.model.findById(id_trabajo).populate('Trabajo');
  }
  actualizar(id_trabajo: string, vuelosDTO: TrabajaenDTO): Promise<InterTrabajaen> {
    return this.model.findByIdAndUpdate(id_trabajo, vuelosDTO, { new: true });
  }
  async eliminar(id_trabajo: string) {
    await this.model.findByIdAndDelete(id_trabajo);
    return { status: HttpStatus.OK, msg: 'Trabajo eliminado' };
  }
  async insertarEmpleado(
    id_trabajo: string,
    empleadoId: string,
  ): Promise<InterTrabajaen> {
    return await this.model
      .findByIdAndUpdate(
        id_trabajo,
        { $addToSet: { empleado: empleadoId } },
        { new: true },
      )
      .populate('empleado');
  }
}