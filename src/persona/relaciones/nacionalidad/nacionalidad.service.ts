import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Nacionalidad } from './entities/nacionalidad.entity';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';

@Injectable()
export class NacionalidadService {
  constructor(
    @InjectRepository(Nacionalidad)
    private nacionalidadRepository: Repository<Nacionalidad>,
  ) {}

  async create(
    createNacionalidadDto: CreateNacionalidadDto,
  ): Promise<Nacionalidad> {
    const nacionalidad = this.nacionalidadRepository.create(
      createNacionalidadDto,
    );
    return await this.nacionalidadRepository.save(nacionalidad);
  }

  async findAll(): Promise<Nacionalidad[]> {
    return await this.nacionalidadRepository.find();
  }

  // Otros métodos según sea necesario
}
