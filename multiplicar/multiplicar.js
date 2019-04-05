const fs = require ('fs');


module.exports.listartabla = (base, limite) => {
	return new Promise((resolve, reject) => {
		let data = '';
		for (let i = base; i <= limite; i++){
			data +=(`${ base } * ${ i } = ${ base * i }\n`);
		}
		if (!data)
			reject('esta vacio')
		else
			resolve(data);

	}); 
}

 
module.exports.crearArchivo = ( base, limite ) => {
	return new Promise((resolve, reject) => {
			
			let data = '';
			for (let i = 1; i <= limite; i++) {
				data += `${ base } * ${ i } = ${ base * i }\n`;
			}

			fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
				if (err) 
					reject(err)
				else
				resolve(`tabla-${ base }.txt`);
			});

	});
}


