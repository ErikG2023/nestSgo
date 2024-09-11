import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from './entities/region.entity';
import { CreateRegionDto } from './dto/create-region.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private afpRepository: Repository<Region>,
  ) {}

  async create(createNacionalidadDto: CreateRegionDto): Promise<Region> {
    const afp = this.afpRepository.create(createNacionalidadDto);
    return await this.afpRepository.save(afp);
  }

  async findAll(): Promise<Region[]> {
    return await this.afpRepository.find();
  }

  // Otros métodos según sea necesario
}
