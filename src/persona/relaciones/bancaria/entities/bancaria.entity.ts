import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Persona } from '../../../entities/persona.entity';

@Entity()
export class Bancaria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  banco: string;

  @Column()
  tipoCuenta: string;

  @Column()
  numeroCuenta: string;

  @OneToOne(() => Persona, (persona) => persona.bancaria)
  persona: Persona;
}
