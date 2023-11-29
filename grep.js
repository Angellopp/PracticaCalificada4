#!/usr/bin/env node

const fs = require('fs');

// Obtener los argumentos de la línea de comandos
const searchString = process.argv[2];
const files = process.argv.slice(3);

// Leer y buscar en los archivos
files.forEach((file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error al leer el archivo ${file}: ${err}`);
      return;
    }
    const lines = data.split('\n');

    const matchingLines = lines.filter((line, lineNumber) => {
      if (line.includes(searchString)) {
        if (process.argv.includes('-n')) {
          line = `${lineNumber + 1}:${line}`;
        }
        return true;
      }
      return false;
    });

    // Mostrar las líneas coincidentes
    if (matchingLines.length > 0) {
      console.log(`Archivo: ${file}`);
      console.log(matchingLines.join('\n'));
      console.log();
    }
  });
});