import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ciudad } from '../../ciudad/entities/ciudad.entity';
import { Persona } from 'src/persona/entities/persona.entity';

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcionDireccion: string;

  @ManyToOne(() => Ciudad, (ciudad) => ciudad.direciones)
  ciudad: Ciudad;

  @OneToOne(() => Persona, (persona) => persona.direccion)
  persona: Persona;
}
