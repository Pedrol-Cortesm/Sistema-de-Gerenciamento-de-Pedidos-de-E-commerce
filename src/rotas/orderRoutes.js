const express = require('express');
const orderController = require('../controladores/orderController');

const rotas = express.Router();

rotas.post('/', orderController.createOrder);

module.exports = rotas;
