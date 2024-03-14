import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class ProyectoDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    nombre_proyecto: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    cliente: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    duracion: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber()
    salario: number;
    @IsNotEmpty({ message: 'El campo es requerido' })
    fecha_inicio: Date;
 
  }