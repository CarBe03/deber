import { Injectable } from '@nestjs/common';
import { InterTrabajaen } from './trabaja_en.interface';
import { v4 as uuidV4 } from 'uuid';
import { TrabajaenDTO } from './trabaja_en.dto';
@Injectable()
export class TrabajaEnService {
  trabaja_en: InterTrabajaen[] = [];
  todos() {
    return this.trabaja_en;
  }
  uno(id_trabajo: string) {
    return this.trabaja_en.find(
      (trabaja_en) => trabaja_en.id_trabajo == id_trabajo,
    );
  }
  insertar(trabaja_en: TrabajaenDTO) {
    const traen = {
        id_trabajo: uuidV4(),
      ...trabaja_en,
    };
    this.trabaja_en.push(traen);
    return this.trabaja_en;
  }
  actualizar(id_trabajo: string, trabaja_enActualizar: TrabajaenDTO) {
    const nuevotraen = { id_trabajo, ...trabaja_enActualizar };
    this.trabaja_en = this.trabaja_en.map((trabaja_en) =>
    trabaja_en.id_trabajo === id_trabajo ? nuevotraen : trabaja_en,
    );
    return nuevotraen;
  }
  eliminar(id_trabajo: string) {
    this.trabaja_en = this.trabaja_en.filter(
      (trabaja_en) => trabaja_en.id_trabajo !== id_trabajo,
    );
    return 'Trabaja_en Eliminado con Exito';
  }
}
