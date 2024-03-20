import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class EmpleadoDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly cargo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly salario: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha_contratacion;

}