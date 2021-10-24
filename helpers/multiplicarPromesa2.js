const fs = require('fs')

const crearArchivo = (base = 5) => {

    return new Promise((resolve, reject) => {
        console.log('==================================')
        console.log(`        Tabla del ${base}         `)
        console.log('==================================')

        let salida = '';
        const tabla5 = () => {
            for (let i = 1; i <= 10; i++) {
                salida += `${base} x ${i} = ${5 * i} \n`;
            }
        }

        tabla5()
        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida)    //La diferencia es que si existe un error debemos atraparlo con un try catch
        resolve (`tabla-${base}.txt`)
    })
}

module.exports = {
    crearArchivo
}