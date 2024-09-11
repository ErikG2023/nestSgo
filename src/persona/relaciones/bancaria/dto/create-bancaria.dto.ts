import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBancariaDto {
  @IsNotEmpty()
  @IsString()
  banco: string;

  @IsNotEmpty()
  @IsString()
  tipoCuenta: string;

  @IsNotEmpty()
  @IsString()
  numeroCuenta: string;
}
