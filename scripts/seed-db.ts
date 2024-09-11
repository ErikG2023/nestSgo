import { DataSource } from 'typeorm';
import { Nacionalidad } from '../src/persona/relaciones/nacionalidad/entities/nacionalidad.entity';
import { Afp } from '../src/persona/relaciones/afp/entities/afp.entity';
import { Salud } from '../src/persona/relaciones/salud/entities/salud.entity'; // Importar la entidad Salud
import { Region } from '../src/persona/relaciones/region/entities/region.entity';
import { Ciudad } from '../src/persona/relaciones/ciudad/entities/Ciudad.entity';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as path from 'path';

config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: parseInt(configService.get('DATABASE_PORT')),
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASSWORD'),
  database: configService.get('DATABASE_NAME'),
  entities: [
    path.join(__dirname, '..', 'src', '**', '*.entity.{ts,js}'),
    Ciudad,
    Region,
  ],
  synchronize: false,
});

async function seed() {
  try {
    await AppDataSource.initialize();
    const nacionalidadRepository = AppDataSource.getRepository(Nacionalidad);
    const afpRepository = AppDataSource.getRepository(Afp);
    const saludRepository = AppDataSource.getRepository(Salud); // Repositorio de Salud
    const regionRepository = AppDataSource.getRepository(Region); // Repositorio de Region
    const ciudadRepository = AppDataSource.getRepository(Ciudad); // Repositorio de Ciudad

    // Seed Nacionalidades
    const nacionalidades = [
      { pais: 'Chile', nacionalidadPais: 'Chilena' },
      { pais: 'Argentina', nacionalidadPais: 'Argentina' },
      { pais: 'Perú', nacionalidadPais: 'Peruana' },
    ];

    for (const nac of nacionalidades) {
      const nacionalidad = nacionalidadRepository.create(nac);
      await nacionalidadRepository.save(nacionalidad);
    }

    console.log('Nacionalidades seeded successfully');

    // Seed AFPs
    const afps = [
      { sistemaAfp: 'AFP Modelo', porcentaje: 10.58 },
      { sistemaAfp: 'AFP Cuprum', porcentaje: 10.48 },
      { sistemaAfp: 'AFP Habitat', porcentaje: 11.27 },
      { sistemaAfp: 'AFP PlanVital', porcentaje: 10.41 },
      { sistemaAfp: 'AFP ProVida', porcentaje: 11.45 },
      { sistemaAfp: 'AFP Capital', porcentaje: 11.44 },
      { sistemaAfp: 'AFP Uno', porcentaje: 10.69 },
    ];

    for (const afpData of afps) {
      const afp = afpRepository.create(afpData);
      await afpRepository.save(afp);
    }

    console.log('AFPs seeded successfully');

    // Seed Salud (Agregar datos a la tabla Salud)
    const saludes = [
      { previsionSalud: 'FONASA', porcentaje: 7.0 },
      { previsionSalud: 'ISAPRE Colmena', porcentaje: 8.0 },
      { previsionSalud: 'ISAPRE Cruz Blanca', porcentaje: 7.5 },
      { previsionSalud: 'ISAPRE Consalud', porcentaje: 7.6 },
    ];

    for (const saludData of saludes) {
      const salud = saludRepository.create(saludData);
      await saludRepository.save(salud);
    }

    console.log('Saludes seeded successfully');

    // Seed Regiones
    const regiones = [
      { nombre: 'Región de Arica y Parinacota' },
      { nombre: 'Región de Tarapacá' },
      { nombre: 'Región de Antofagasta' },
      { nombre: 'Región de Atacama' },
      { nombre: 'Región de Coquimbo' },
      { nombre: 'Región de Valparaíso' },
      { nombre: 'Región Metropolitana de Santiago' },
      { nombre: 'Región del Libertador General Bernardo O’Higgins' },
      { nombre: 'Región del Maule' },
      { nombre: 'Región de Ñuble' },
      { nombre: 'Región del Biobío' },
      { nombre: 'Región de La Araucanía' },
      { nombre: 'Región de Los Ríos' },
      { nombre: 'Región de Los Lagos' },
      { nombre: 'Región de Aysén del General Carlos Ibáñez del Campo' },
      { nombre: 'Región de Magallanes y de la Antártica Chilena' },
    ];

    for (const reg of regiones) {
      const region = regionRepository.create(reg);
      await regionRepository.save(region);
    }

    console.log('Regiones seeded successfully');

    // Seed Ciudades
    const ciudades = [
      { nombre: 'Arica', regionNombre: 'Región de Arica y Parinacota' },
      { nombre: 'Iquique', regionNombre: 'Región de Tarapacá' },
      { nombre: 'Antofagasta', regionNombre: 'Región de Antofagasta' },
      { nombre: 'Copiapó', regionNombre: 'Región de Atacama' },
      { nombre: 'La Serena', regionNombre: 'Región de Coquimbo' },
      { nombre: 'Valparaíso', regionNombre: 'Región de Valparaíso' },
      { nombre: 'Santiago', regionNombre: 'Región Metropolitana de Santiago' },
      {
        nombre: 'Rancagua',
        regionNombre: 'Región del Libertador General Bernardo O’Higgins',
      },
      { nombre: 'Talca', regionNombre: 'Región del Maule' },
      { nombre: 'Chillán', regionNombre: 'Región de Ñuble' },
      { nombre: 'Concepción', regionNombre: 'Región del Biobío' },
      { nombre: 'Temuco', regionNombre: 'Región de La Araucanía' },
      { nombre: 'Valdivia', regionNombre: 'Región de Los Ríos' },
      { nombre: 'Puerto Montt', regionNombre: 'Región de Los Lagos' },
      {
        nombre: 'Coyhaique',
        regionNombre: 'Región de Aysén del General Carlos Ibáñez del Campo',
      },
      {
        nombre: 'Punta Arenas',
        regionNombre: 'Región de Magallanes y de la Antártica Chilena',
      },
    ];

    for (const ciudadData of ciudades) {
      const region = await regionRepository.findOne({
        where: { nombre: ciudadData.regionNombre },
      });
      if (region) {
        const ciudad = ciudadRepository.create({
          nombre: ciudadData.nombre,
          regionId: region.id,
        });
        await ciudadRepository.save(ciudad);
      }
    }

    console.log('Ciudades seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
