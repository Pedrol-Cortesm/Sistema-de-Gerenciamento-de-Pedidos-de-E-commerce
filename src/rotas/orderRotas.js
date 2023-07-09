const express = require('express');
const orderControladores = require('../controladores/orderControladores');

const rotas = express.Router();

rotas.post('/', orderControladores.createOrder);

module.exports = rotas;
