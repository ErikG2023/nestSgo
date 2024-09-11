const fs = require('fs');
const path = require('path');

// Lista de archivos a combinar
const files = [
  // scripts
  'scripts/seed-db.ts',
  'src/database/database.module.ts',
  // persona
  'src/persona/dto/create-persona.dto.ts',
  'src/persona/dto/update-persona.dto.ts',
  'src/persona/entities/persona.entity.ts',
  'src/persona/persona.controller.ts',
  'src/persona/persona.module.ts',
  'src/persona/persona.service.ts',
  // nacionalidad
  'src/persona/relaciones/nacionalidad/dto/create-nacionalidad.dto.ts',
  'src/persona/relaciones/nacionalidad/entities/nacionalidad.entity.ts',
  'src/persona/relaciones/nacionalidad/nacionalidad.module.ts',
  'src/persona/relaciones/nacionalidad/nacionalidad.service.ts',
  // afp
  'src/persona/relaciones/afp/dto/create-afp.dto.ts',
  'src/persona/relaciones/afp/dto/update-afp.dto.ts',
  'src/persona/relaciones/afp/entities/afp.entity.ts',
  'src/persona/relaciones/afp/afp.module.ts',
  'src/persona/relaciones/afp/afp.service.ts',
  // salud
  'src/persona/relaciones/salud/dto/create-salud.dto.ts',
  'src/persona/relaciones/salud/dto/update-salud.dto.ts',
  'src/persona/relaciones/salud/entities/salud.entity.ts',
  'src/persona/relaciones/salud/salud.module.ts',
  'src/persona/relaciones/salud/salud.service.ts',
  // region
  'src/persona/relaciones/region/dto/create-region.dto.ts',
  'src/persona/relaciones/region/dto/update-region.dto.ts',
  'src/persona/relaciones/region/entities/region.entity.ts',
  'src/persona/relaciones/region/region.module.ts',
  'src/persona/relaciones/region/region.service.ts',
  // ciudad
  'src/persona/relaciones/ciudad/dto/create-ciudad.dto.ts',
  'src/persona/relaciones/ciudad/dto/update-ciudad.dto.ts',
  'src/persona/relaciones/ciudad/entities/ciudad.entity.ts',
  'src/persona/relaciones/ciudad/ciudad.module.ts',
  'src/persona/relaciones/ciudad/ciudad.service.ts',
  // direccion
  'src/persona/relaciones/direccion/dto/create-direccion.dto.ts',
  'src/persona/relaciones/direccion/dto/update-direccion.dto.ts',
  'src/persona/relaciones/direccion/entities/direccion.entity.ts',
  'src/persona/relaciones/direccion/direccion.module.ts',
  'src/persona/relaciones/direccion/direccion.service.ts',
  // app
  'src/app.controller.ts',
  'src/app.module.ts',
  'src/app.service.ts',
  'src/main.ts',
  // raiz
  '.env',
  'package.json',
  'docker-compose.yml',
  'tsconfig.json',
];

// Nombre del archivo de salida
const outputFile = 'combined.txt';

// Función para combinar los archivos
function combineFiles(fileList, output) {
  let combinedContent = '';

  fileList.forEach((filePath) => {
    const absolutePath = path.join(__dirname, filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf-8');
    combinedContent += `\n// ----- ${filePath} -----\n\n`; // Añade el nombre del archivo al contenido combinado
    combinedContent += fileContent;
    combinedContent += '\n'; // Añade un salto de línea entre archivos
  });

  fs.writeFileSync(output, combinedContent, 'utf-8');
  console.log(`Todos los archivos se han combinado en ${output}`);
}

// Ejecutar la función
combineFiles(files, outputFile);
