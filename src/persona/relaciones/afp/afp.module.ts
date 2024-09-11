import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Afp } from './entities/afp.entity';
import { AfpService } from './afp.service';

@Module({
  imports: [TypeOrmModule.forFeature([Afp])],
  providers: [AfpService],
  exports: [AfpService],
})
export class AfpModule {}
