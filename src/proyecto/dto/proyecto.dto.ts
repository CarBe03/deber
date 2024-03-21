import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ProyectoDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre_proyecto: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly duracion: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly cliente: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha_inicio;

}