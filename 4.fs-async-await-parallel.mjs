import { readFile } from 'node:fs/promises';
console.log('1');

Promise.all([
    readFile('./file.txt', 'utf-8'),
    readFile('./file2.txt', 'utf-8')
]).then(([text, secondText]) => {   
    console.log('Primer texto: ', text);
    console.log('Segundo texto: ', secondText);
});

console.log('2');
