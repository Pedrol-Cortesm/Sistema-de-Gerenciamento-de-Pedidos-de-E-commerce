const express = require('express');
const authController = require('../controladores/authController');

const rotas = express.Router();

rotas.post('/login', authController.login);

module.exports = rotas;
