const fs = require("fs");
const colors = require("colors");

let salida = "";
let salida2 = "";

const crearArchivo = async (base = 5, listar, limite) => {
  try {
    // numbers.forEach((number) => {
    //   salida +=
    //     number < 10
    //       ? `${base} ${`x`.green} ${number} ${`: `.green} ${base * number}\n`
    //       : `${base} x ${number}: ${base * number}`.bgRed;
    //   // return console.log(`${num} x ${number}: ${num * number}`)
    // });

    for (let i = 1; i <= limite; i++) {
      salida +=
        i < limite
          ? `${base} ${`x`.green} ${i} ${`: `.green} ${base * i}\n`
          : `${base} x ${i}: ${base * i}`.bgRed;

      salida2 +=
        i < limite
          ? `${base} x ${i} : ${base * i}\n`
          : `${base} x ${i}: ${base * i}`;
    }

    if (listar) {
      console.log(
        colors.bold(`=====================
    Tabla del: ${base}
=====================`)
      );
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida2);
    return `\ntabla-${base}.txt creado`.america;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
