import { IsNotEmpty, IsString } from 'class-validator';
import { ManyToOne } from 'typeorm';
import { Region } from '../../region/entities/region.entity';

export class CreateCiudadDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ManyToOne(() => Region, (region) => region.ciudades)
  region: Region;
}
