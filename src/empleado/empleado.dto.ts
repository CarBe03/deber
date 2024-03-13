import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class EmpleadoDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    nombre: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    cargo: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsNumber()
    salario: number;
    @IsNotEmpty({ message: 'El campo es requerido' })
    fecha_contratacion: Date;
   /* @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString()
    cedula: string;*/
  
    //@IsEmail()
    //email: string;
  }