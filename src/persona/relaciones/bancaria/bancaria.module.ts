import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bancaria } from './entities/bancaria.entity';
import { BancariaService } from './bancaria.service';

@Module({
  imports: [TypeOrmModule.forFeature([Bancaria])],
  providers: [BancariaService],
  exports: [BancariaService],
})
export class BancariaModule {}
