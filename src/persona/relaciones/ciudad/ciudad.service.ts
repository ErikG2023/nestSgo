import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ciudad } from './entities/ciudad.entity';
import { CreateCiudadDto } from './dto/create-ciudad.dto';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private afpRepository: Repository<Ciudad>,
  ) {}

  async create(createNacionalidadDto: CreateCiudadDto): Promise<Ciudad> {
    const afp = this.afpRepository.create(createNacionalidadDto);
    return await this.afpRepository.save(afp);
  }

  async findAll(): Promise<Ciudad[]> {
    return await this.afpRepository.find();
  }

  // Otros métodos según sea necesario
}
