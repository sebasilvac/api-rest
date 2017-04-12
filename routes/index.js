'use strict'

const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')

// Rutas
api.get('/product', 			 	productCtrl.getProducts)
api.get('/product/:product_id', 	productCtrl.getProduct)
api.post('/product', 				productCtrl.saveProduct)
api.put('/product/:product_id', 	productCtrl.updateProduct)
api.delete('/product/:product_id', 	productCtrl.deleteProduct)

/**
 * por defecto javascript
 *
 */
api.get('/private', auth.isAuth, function(req, res) {

    res.status(200).send({message:'Tienes acceso '})

})

module.exports = api
