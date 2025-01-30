const fs = require('node:fs/promises');

console.log('Leyendo primer archivo');
fs.readFile('./file.txt', 'utf-8')
    .then((text) => {
        console.log('Primer texto: ', text);
    }); // con promesas

console.log('Haciendo otra operación');
console.log('Leyendo segundo archivo');
fs.readFile('./file2.txt', 'utf-8')
    .then((text) => {
        console.log('Segundo texto: ', text);
    });