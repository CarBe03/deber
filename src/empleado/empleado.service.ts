import { Injectable } from '@nestjs/common';
import { InterEmpleado } from './empleado.interface';
import { v4 as uuidV4 } from 'uuid';
import { EmpleadoDTO } from './empleado.dto';

@Injectable()
export class EmpleadoService {
    empleado: InterEmpleado[] = [];
    todos() {
      return this.empleado;
    }
    uno(id: string) {
      return this.empleado.find((empleado) => empleado.id == id);
    }
    insertar(empleado: EmpleadoDTO) {
      const emp = {
        id: uuidV4(),
        ...empleado,
      };
      this.empleado.push(emp);
      return this.empleado;
    }
    actualizar(id: string, empleadoActualizar: EmpleadoDTO) {
      const nuevoemp = { id, ...empleadoActualizar };
      this.empleado = this.empleado.map((empleado) =>
        empleado.id === id ? nuevoemp : empleado,
      );
      return nuevoemp;
    }
    eliminar(id: string) {
      this.empleado = this.empleado.filter((empleado) => empleado.id !== id);
      return 'Empleado Eliminado con Exito';
    }
  }
