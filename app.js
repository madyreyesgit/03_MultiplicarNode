//requires 
//existen tres tipos de requires
//Los nativos de node

//Paquete que se instala en node, no son
//nativos de node
//Require de archivo creados por el usuario
// const fs = require('./fs')

//Exportacion y destructuracion

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:  ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}
//console.log(argv);
//console.log(argv2);

//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];