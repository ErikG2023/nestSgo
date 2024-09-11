import { Type } from 'class-transformer';
import { IsNotEmpty, IsEmail, IsDate, IsString } from 'class-validator';
import { Afp } from 'src/persona/relaciones/afp/entities/afp.entity';
import { Nacionalidad } from 'src/persona/relaciones/nacionalidad/entities/nacionalidad.entity';
import { ManyToOne } from 'typeorm';
import { Salud } from '../relaciones/salud/entities/salud.entity';

export class CreatePersonaDto {
  @IsNotEmpty()
  @IsString()
  primerNombre: string;

  @IsNotEmpty()
  @IsString()
  segundoNombre: string;

  @IsNotEmpty()
  @IsString()
  apellidoPaterno: string;

  @IsNotEmpty()
  @IsString()
  apellidoMaterno: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  fechaNacimiento: Date;

  @IsNotEmpty()
  @IsString()
  sexo: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  direccionId: string;

  // @IsNotEmpty()
  // @IsString()
  // tipoSaludId: string;
  @ManyToOne(() => Salud, (salud) => salud.personas)
  salud: Salud;

  @ManyToOne(() => Afp, (afp) => afp.personas)
  afp: Afp;

  @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.personas)
  nacionalidad: Nacionalidad;
}
