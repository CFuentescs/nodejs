const opts = {
	base: {
		alias: 'b',
		demand: true
	},
	limite: {
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
	.command ('listar', 'imprime en consola la tabla de multiplicar',opts)
	.command ('crear', 'crea en txt la tabla de multiplicar',opts)
	.help().argv;

	module.exports = {
		argv
	}