const { readFile } = require('node:fs/promises');
// ESModules de forma asincrona pero secuencial
// IIFE / Inmediatly Invoked Function Expression
(
    async () => {
        console.log('Leyendo primer archivo..');
        const text = await readFile('./file.txt', 'utf-8')
        console.log('Primer texto: ', text);

        console.log('Haciendo otra operación');

        console.log('Leyendo segundo archivo..');
        const secondText = await readFile('./file2.txt', 'utf-8')
        console.log('Segundo texto: ', secondText);
    }
)() 
