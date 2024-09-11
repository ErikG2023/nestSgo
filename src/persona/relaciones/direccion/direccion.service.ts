import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Direccion } from './entities/direccion.entity';
import { CreateDireccionDto } from './dto/create-direccion.dto';

@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion)
    private afpRepository: Repository<Direccion>,
  ) {}

  async create(createNacionalidadDto: CreateDireccionDto): Promise<Direccion> {
    const afp = this.afpRepository.create(createNacionalidadDto);
    return await this.afpRepository.save(afp);
  }

  async findAll(): Promise<Direccion[]> {
    return await this.afpRepository.find();
  }

  // Otros métodos según sea necesario
}
