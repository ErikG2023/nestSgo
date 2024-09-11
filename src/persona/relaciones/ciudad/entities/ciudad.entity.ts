import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Region } from '../../region/entities/region.entity';
import { Direccion } from '../../direccion/entities/direccion.entity';

@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Region, (region) => region.ciudades)
  regionId: number;
  // Una ciudad pertenece a una región (muchos a uno).

  @OneToMany(() => Direccion, (direcion) => direcion.ciudad)
  direciones: Direccion[];
  // Una ciudad puede tener varias direcciones (uno a muchos).
}
