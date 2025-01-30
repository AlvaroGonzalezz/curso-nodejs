const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.';

async function ls(folder) {
    let files;
    try {
        files = await fs.readdir(folder); // lee el contenido del directorio
    } catch  {
        console.error("Error al leer el directorio ${folder}");
        process.exit(1);
    }
    const filesPromises = files.map(async file => {
        let stats;
        const filePath = path.join(folder, file);
        try {
         stats = await fs.stat(filePath); // obtiene informacion del archivo
            
        } catch {
            console.error("Error al leer el archivo ${file}");
            process.exit(1);
        }
        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f'; // si es directorio o archivo
        const fileSize = stats.size; // tamaño del archivo
        const modified = stats.mtime.toLocaleString(); // fecha de modificacion
        
        return `${fileType.padEnd(20)} ${file} ${fileSize.toString().padStart(10)} ${modified}`;
    });

    const filesInfo = await Promise.all(filesPromises); // espera a que todas las promesas se resuelvan
    filesInfo.forEach(fileInfo => {
        console.log(fileInfo);
    });
}

ls(folder); // ejecuta la funcion ls con el directorio que se le pasa como argumento