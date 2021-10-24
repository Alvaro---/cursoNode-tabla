
const argv = require('yargs')
    .option('b', { //alias reducido
        alias: 'base', //igual al alias
        type: 'number', //tipo
        demandOption: true, //Obliga a que exista este valor. Sin embargo admiira errores que seran NAN 
        describe: 'Numero base para la tabla de multiplicar'
    })
    .option('h', { //alias reducido
        alias: 'hasta', //igual al alias
        type: 'number', //tipo
        demandOption: true, //Obliga a que exista este valor. Sin embargo admiira errores que seran NAN 
        describe: 'Hasta que numero mostrara la tabla',
        default: 10
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Mostrar resultado en pantalla'
    })
    .check((argv, options) => {
        console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true
    })
    .argv

module.exports = argv