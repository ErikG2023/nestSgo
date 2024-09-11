import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNacionalidadDto {
  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsNotEmpty()
  @IsString()
  nacionalidadPais: string;
}
