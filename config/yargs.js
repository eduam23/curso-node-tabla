const argv = require('yargs')
.option(
    {
    'b': {
        alias:'base',
        type:'number',
        demandOption: true,
    },
    'l':{
        alias:'listar',
        type:'boolean',
        default: false,
    },
    't':{
        alias:'limite',
        type:'number',
        demandOption: true,
    }
})
    .check((argv,options)=>{
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        else if (isNaN(argv.t)) {
            throw 'La límite tiene que ser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;