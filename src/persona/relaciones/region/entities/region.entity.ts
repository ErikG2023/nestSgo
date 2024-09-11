import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Ciudad } from '../../ciudad/entities/ciudad.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Ciudad, (ciudad) => ciudad.regionId)
  ciudades: Ciudad[];
  // Una región puede tener varias ciudades (uno a muchos).
}
