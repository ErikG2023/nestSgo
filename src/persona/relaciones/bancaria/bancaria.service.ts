import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bancaria } from './entities/bancaria.entity';
import { CreateBancariaDto } from './dto/create-bancaria.dto';

@Injectable()
export class BancariaService {
  constructor(
    @InjectRepository(Bancaria)
    private bancariaRepository: Repository<Bancaria>,
  ) {}

  async create(createBancariaDto: CreateBancariaDto): Promise<Bancaria> {
    const nacionalidad = this.bancariaRepository.create(createBancariaDto);
    return await this.bancariaRepository.save(nacionalidad);
  }

  async findAll(): Promise<Bancaria[]> {
    return await this.bancariaRepository.find();
  }

  // Otros métodos según sea necesario
}
