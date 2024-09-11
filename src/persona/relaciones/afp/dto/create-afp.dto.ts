import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAfpDto {
  @IsNotEmpty()
  @IsString()
  sistemaAfp: string;

  @IsNotEmpty()
  @IsNumber()
  porcentaje: number;
}
