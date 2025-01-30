// process, objeto globar que nos da informacion y control del proceso actual
console.log(process.argv);

// controlar eventos del proceso
process.on('exit', () => {
// limpiar la consola
});

// directorio actual en el que se esta ejecutando el proceso
console.log(process.cwd());

// controlar la salida del proceso
// process.exit(1); // 1 es el codigo de salida incorrecto
process.exit(0); // 0 es el codigo de salida correcto