const express = require('express');
const produtoControladores = require('../controladores/produtoControladores');

const rotas = express.Router();

rotas.post('/', produtoControladores.createProduct);

module.exports = rotas;
