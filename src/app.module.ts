import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { PersonaModule } from './persona/persona.module';
import { NacionalidadModule } from './persona/relaciones/nacionalidad/nacionalidad.module';
import { AfpModule } from './persona/relaciones/afp/afp.module';
import { SaludModule } from './persona/relaciones/salud/salud.module';
import { RegionModule } from './persona/relaciones/region/region.module';
import { CiudadModule } from './persona/relaciones/ciudad/ciudad.module';
import { DireccionModule } from './persona/relaciones/direccion/direccion.module';
import { BancariaModule } from './persona/relaciones/bancaria/bancaria.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PersonaModule,
    NacionalidadModule,
    AfpModule,
    SaludModule,
    RegionModule,
    CiudadModule,
    DireccionModule,
    BancariaModule,
  ],
})
export class AppModule {}
