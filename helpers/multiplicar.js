const fs = require ('fs')

const crearArchivo = (base = 5) => {

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


    fs.writeFileSync(`tabla-${base}`, salida)    //La diferencia es que si existe un error debemos atraparlo con un try catch
    console.log("creado correctamente")

    // fs.writeFile(`tabla-${base}`, salida, (err)=>{
    //     if(err) throw(err)
    //     console.log("creado correctamente")
    // })
}

module.exports = {
    crearArchivo
}