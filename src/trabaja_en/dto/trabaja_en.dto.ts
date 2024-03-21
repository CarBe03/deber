import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class TrabajaenDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id_trabajo: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly id_proyecto: string;
}
