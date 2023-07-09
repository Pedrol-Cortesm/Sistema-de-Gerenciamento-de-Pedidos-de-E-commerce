const express = require('express');
const productController = require('../controladores/productController');

const rotas = express.Router();

rotas.post('/', productController.createProduct);

module.exports = rotas;
