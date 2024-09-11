import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ciudad } from './entities/Ciudad.entity';
import { CiudadService } from './ciudad.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])],
  providers: [CiudadService],
  exports: [CiudadService],
})
export class CiudadModule {}
