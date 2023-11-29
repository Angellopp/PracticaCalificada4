#!/usr/bin/env node

const fs = require('fs');

// Obtener argumentos de la línea de comandos
const args = process.argv.slice(2);

// Función principal de grep
function grep(searchString, flags, files) {
  let result = '';

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8').split('\n');

    for (let i = 0; i < content.length; i++) {
      const line = content[i];

      // Aplicar indicadores
      if (
        (flags.includes('i') && line.toLowerCase().includes(searchString.toLowerCase())) ||
        (!flags.includes('i') && line.includes(searchString))
      ) {
        if (flags.includes('l')) {
          result += `${file}\n`;
          break; // Mostrar solo el nombre del archivo
        } else {
          const lineNumber = flags.includes('n') ? `${i + 1}:` : '';
          const matchedLine = flags.includes('x') ? line : `${lineNumber}${line}`;
          result += `${file}:${matchedLine}\n`;
        }
      } else if (flags.includes('v')) {
        // Invertir el programa
        result += `${file}:${i + 1}:${line}\n`;
      }
    }
  }

  return result.trim();
}

// Parsear argumentos
const searchString = args.shift();
const flags = args.filter(arg => arg.startsWith('-'));
const files = args.filter(arg => !arg.startsWith('-'));

// Ejecutar grep
const result = grep(searchString, flags, files);
console.log(result);
