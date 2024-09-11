import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSaludDto {
  @IsNotEmpty()
  @IsString()
  previsionSalud: string;

  @IsNotEmpty()
  @IsNumber()
  porcentaje: number;
}
