const { crearArchivo } = require('./helpers/multiplicarPromes');
const colors =require('colors')

const argv = require('./config/yargs');

console.clear();

// console.log(process.argv); //Procesos
// console.log(argv) //Objeto de resutlado constante yargs 


// console.log('base yargs: ', argv.base)


crearArchivo(argv.base, argv.lista, argv.hasta)
    .then(msg => {console.log(msg.green, 'OK'.green)})
    .catch(err => {console.log(err)});


// console.log(process.argv)
/*
const [,,arg3='--base=5'] =process.argv //desestructurar array
const [,base]= arg3.split('=') //se divide en dos argumentos y se desestructura
*/
// console.log(base)
// const base = 4;


// crearArchivo(base)
// crearArchivo(base = argv.base)
//     .then(msg => {
//         console.log(msg, 'CREADO')
//     })
//     .catch(err => {
//         console.log('ALGUI MALIO SAL')
//         console.log(err)
//     });
