const fs = require('fs')
const colors =require('colors')

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
    try {
        let salida = '';
        let salidaTxt = ''
        
        const tabla5 = () => {
            for (let i = 1; i <= hasta; i++) {
                salida += `${base} ${'x'.red} ${colors.yellow(i)} ${'='.red} ${base * i} \n`;
                salidaTxt += `${base} x ${i} = ${base * i} \n`;
            }
        }
        
        tabla5()
        if (listar) {
            console.log(colors.bgBlue('=================================='))
            console.log(colors.bgBlue(`        Tabla del ${base}         `))
            console.log(colors.bgBlue('=================================='))
            console.log(colors.blue(salida))
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salidaTxt)    //La diferencia es que si existe un error debemos atraparlo con un try catch
        return `Tabla-${base}.txt fue creado`
    } catch (err) {
        return (`ErRor  ${err}`)
    }
}

module.exports = {
    crearArchivo
}