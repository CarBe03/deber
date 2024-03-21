export interface InterEmpleado extends Document {
    id: string;
    nombre: string;
    cargo: string;
    salario: number;
    fecha_contratacion: Date;
  }