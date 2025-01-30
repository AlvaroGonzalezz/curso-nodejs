const path = require('node:path');
console.log(path.sep); // separador de rutas segun S.O.
// unir rutas 
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath); // content/subfolder/test.txt
// obtener el nombre del archivo
const base = path.basename(filePath);
// const base = path.basename(filePath, '.txt'); // sin la extension
console.log(base); // test.txt
const extension = path.extname(filePath); // extension del archivo
console.log(extension); // .txt