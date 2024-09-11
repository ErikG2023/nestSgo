import { Nacionalidad } from '../relaciones/nacionalidad/entities/nacionalidad.entity';
import { Afp } from '../relaciones/afp/entities/afp.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Salud } from '../relaciones/salud/entities/salud.entity';
import { Direccion } from '../relaciones/direccion/entities/direccion.entity';
import { Bancaria } from '../relaciones/bancaria/entities/bancaria.entity';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  primerNombre: string;

  @Column()
  segundoNombre: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column()
  sexo: string;

  @Column()
  email: string;

  @OneToOne(() => Direccion)
  @JoinColumn()
  direccion: Direccion;

  @ManyToOne(() => Salud, (salud) => salud.personas)
  salud: Salud;

  @ManyToOne(() => Afp, (afp) => afp.personas)
  afp: Afp;

  @ManyToOne(() => Nacionalidad, (nacionalidad) => nacionalidad.personas)
  nacionalidad: Nacionalidad;

  @OneToOne(() => Bancaria)
  @JoinColumn()
  bancaria: Bancaria;
}
