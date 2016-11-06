'use strict'

/**
 * iniciar con npm start
 * start es el nombre del script que ejecuta nodemon
 * "nodemon index.js"
 */

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connect(config.db, (err, res) => {

	if(err) {
		return console.log(`Error al conectar a la BD: ${err}`)
	}

	console.log('la conexión a la base de datos ha sido establecida')

	app.listen(config.port, () => {
		console.log(`API REST corriendo en http://localhost:${config.port}`)
	})
})

	













































































