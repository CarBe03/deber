import { InterEmpleado } from 'src/empleado/empleado.interface';
import { InterProyecto } from 'src/proyecto/proyecto.interface';
export interface InterTrabajaen extends Document {
    id_trabajo: string;
    id: string;
    id_proyecto: string;
    empleado: InterEmpleado[];
    proyecto: InterProyecto[];
  }