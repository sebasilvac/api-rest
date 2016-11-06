'use strict'

const express = require('express')
const api = express.Router()
const productCtrl = require('../controllers/product')

// Rutas
api.get('/product', 			 	productCtrl.getProducts)
api.get('/product/:product_id', 	productCtrl.getProduct)
api.post('/product', 				productCtrl.saveProduct)
api.put('/product/:product_id', 	productCtrl.updateProduct)
api.delete('/product/:product_id', 	productCtrl.deleteProduct)

module.exports = api