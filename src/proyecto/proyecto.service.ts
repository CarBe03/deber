import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InterProyecto } from './proyecto.interface';
import { Model } from 'mongoose';
import { PROYECTO } from 'src/models/models';
import { ProyectoDTO } from './dto/proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectModel(PROYECTO.name) private readonly model: Model<InterProyecto>,
  ) {}

  async todos(): Promise<InterProyecto[]> {
    return await this.model.find();
  }
  async uno(id_proyecto: string): Promise<InterProyecto> {
    return await this.model.findById(id_proyecto);
  }
  async insertar(proyectoDTO: ProyectoDTO): Promise<InterProyecto> {
    const newProyecto = new this.model(proyectoDTO);
    return await newProyecto.save();
  }
  async actualizar(
    id_proyecto: string,
    proyectoDTO: ProyectoDTO,
  ): Promise<InterProyecto> {
    return await this.model.findByIdAndUpdate(id_proyecto, proyectoDTO, {
      new: true,
    });
  }
  async eliminar(id_proyecto: string) {
    await this.model.findByIdAndDelete(id_proyecto);
    return { status: HttpStatus.OK, message: 'Proyecto Eliminado' };
  }
}
