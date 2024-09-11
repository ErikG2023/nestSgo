import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salud } from './entities/salud.entity';
import { CreateSaludDto } from './dto/create-salud.dto';

@Injectable()
export class SaludService {
  constructor(
    @InjectRepository(Salud)
    private afpRepository: Repository<Salud>,
  ) {}

  async create(createNacionalidadDto: CreateSaludDto): Promise<Salud> {
    const afp = this.afpRepository.create(createNacionalidadDto);
    return await this.afpRepository.save(afp);
  }

  async findAll(): Promise<Salud[]> {
    return await this.afpRepository.find();
  }

  // Otros métodos según sea necesario
}
