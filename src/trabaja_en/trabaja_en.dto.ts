import { IsNotEmpty, IsString } from 'class-validator';

export class TrabajaenDTO {
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  id_trabajo: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  id: string;
  @IsNotEmpty({ message: 'El campo es requerido' })
  @IsString({ message: 'Se necesita un texto' })
  id_proyecto: string;
}
