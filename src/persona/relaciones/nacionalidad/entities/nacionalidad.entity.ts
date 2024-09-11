import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Persona } from '../../../entities/persona.entity';

@Entity()
export class Nacionalidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pais: string;

  @Column()
  nacionalidadPais: string;

  @OneToMany(() => Persona, (persona) => persona.nacionalidad)
  personas: Persona[];
}
