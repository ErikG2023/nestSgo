import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { DireccionService } from './direccion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  providers: [DireccionService],
  exports: [DireccionService],
})
export class DireccionModule {}
