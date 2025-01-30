const fs = require('fs');
const stats = fs.statSync('./file.txt');
// sincrono
console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size,
);