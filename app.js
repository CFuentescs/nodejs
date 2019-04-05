const argv = require('./configs/yargs').argv;
const colors = require('colors');

const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');
let base = 6;

	let argv2 = process.argv;

	let comando = argv._[0];

	switch(comando) {

		case 'listar':
			listartabla(argv.base, argv.limite)
				.then(data => console.log(data))
				.catch(e => console.log(e));
		break;
		case 'crear':
			console.log('==============================='.green);
			console.log(`=======tabla de base ${argv.base}=========`.green);
			console.log('==============================='.green);
			crearArchivo( argv.base, argv.limite )

				.then(archivo => console.log(`archivo creado ${archivo.green}`))
				.catch(e => console.log(e));
		break;
		default: 
			console.log("comando no reconocido");

	}