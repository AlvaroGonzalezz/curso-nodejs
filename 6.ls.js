const fs = require('node:fs/promises');
// listar archivos de un directorio
// usando callbacks
// const fs = require('node:fs');
// fs.readdir('.', (err, files) => {
//     if (err) {
//         console.error("Error: ", err);
//         return;
//     }
//     files.forEach(file => {
//         console.log(file);
//     });
// });

// usando try/catch

fs.readdir('.').then(files => {
    files.forEach(file => {
        console.log(file);
    });
}).catch(err => {
    console.error("Error: ", err);
});