const express = require('express');
const authControladores = require('../controladores/authControladores');

const rotas = express.Router();

rotas.post('/login', authControladores.login);

module.exports = rotas;
