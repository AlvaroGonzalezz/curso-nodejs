const fs = require('node:fs');

// de forma sincrona
// console.log('Leyendo primer archivo');
// const text = fs.readFileSync('./file.txt', 'utf-8');
// console.log(text);
// console.log('Haciendo otra operación'); // se ejecuta después de leer el archivo
// console.log('Leyendo segundo archivo');
// const secondText = fs.readFileSync('./file2.txt', 'utf-8');
// console.log(secondText);

// de forma asincrona con callbacks
console.log('Leyendo primer archivo');
fs.readFile('./file.txt', 'utf-8', (err, text) => {
    console.log(text); // se ejecuta de forma asincrona, puede hacer otras tareas mientras se lee el archivo
});
console.log('Haciendo otra operación'); 
console.log('Leyendo segundo archivo');
fs.readFile('./file2.txt', 'utf-8', (err, text) => {
    console.log(text);
});