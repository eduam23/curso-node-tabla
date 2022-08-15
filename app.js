const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors/safe');

console.clear();
// console.log(process.argv);

//mandar datos por comando sin YARGS
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=');
// console.log(base)

// console.log(process.argv);
console.log(argv);

// console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l , argv.t)
    .then(res => console.log(colors.green('\nRespuesta: ') ,res))
    .catch(e=>console.log(colors.bgRed("" + e)))