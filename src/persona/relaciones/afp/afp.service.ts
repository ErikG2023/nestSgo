import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Afp } from './entities/afp.entity';
import { CreateAfpDto } from './dto/create-afp.dto';

@Injectable()
export class AfpService {
  constructor(
    @InjectRepository(Afp)
    private afpRepository: Repository<Afp>,
  ) {}

  async create(createNacionalidadDto: CreateAfpDto): Promise<Afp> {
    const afp = this.afpRepository.create(createNacionalidadDto);
    return await this.afpRepository.save(afp);
  }

  async findAll(): Promise<Afp[]> {
    return await this.afpRepository.find();
  }

  // Otros métodos según sea necesario
}
