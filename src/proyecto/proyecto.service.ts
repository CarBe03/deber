import { Injectable } from '@nestjs/common';
import { InterProyecto } from './proyecto.interface';
import { v4 as uuidV4 } from 'uuid';
import { ProyectoDTO } from './proyecto.dto';

@Injectable()
export class ProyectoService {
    proyecto: InterProyecto[] = [];
    todos() {
      return this.proyecto;
    }
    uno(id_proyecto: string) {
      return this.proyecto.find((proyecto) => proyecto.id_proyecto == id_proyecto);
    }
    insertar(proyecto: ProyectoDTO) {
      const pro = {
        id_proyecto: uuidV4(),
        ...proyecto,
      };
      this.proyecto.push(pro);
      return this.proyecto;
    }
    actualizar(id_proyecto: string, proyectoActualizar: ProyectoDTO) {
      const nuevopro = { id_proyecto, ...proyectoActualizar };
      this.proyecto = this.proyecto.map((proyecto) =>
      proyecto.id_proyecto === id_proyecto ? nuevopro : proyecto,
      );
      return nuevopro;
    }
    eliminar(id_proyecto: string) {
      this.proyecto = this.proyecto.filter((proyecto) => proyecto.id_proyecto !== id_proyecto);
      return 'Proyecto Eliminado con Exito';
    }
}
