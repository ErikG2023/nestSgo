import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Persona } from '../../../entities/persona.entity';

@Entity()
export class Salud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  previsionSalud: string;

  @Column('decimal', { precision: 10, scale: 2 }) // Tipo decimal con precisión y escala
  porcentaje: number;

  @OneToMany(() => Persona, (persona) => persona.salud)
  personas: Persona[];
}
