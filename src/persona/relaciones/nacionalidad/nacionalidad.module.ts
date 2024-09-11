import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nacionalidad } from './entities/nacionalidad.entity';
import { NacionalidadService } from './nacionalidad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Nacionalidad])],
  providers: [NacionalidadService],
  exports: [NacionalidadService],
})
export class NacionalidadModule {}
