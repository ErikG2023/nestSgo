import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salud } from './entities/salud.entity';
import { SaludService } from './salud.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salud])],
  providers: [SaludService],
  exports: [SaludService],
})
export class SaludModule {}
