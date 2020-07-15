const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
        console.log(`Tabla de ${base}`.rainbow);
        for (let f = 1; f <= limite; f++) {
            console.log(`${base}*${f} = ${f*base} \n`);
        }
    }
    //Funcion crear archivo que recibe la base
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        //Declarando error
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base}*${i}  = ${i*base} \n`);
        }


        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`.rainbow);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}