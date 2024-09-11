import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDireccionDto {
  @IsNotEmpty()
  @IsString()
  descripcionDireccion: string;
}
