const express = require('express');
const authRotas = require('./rotas/authRotas');
const produtoRotas = require('./rotas/produtoRotas');
const orderRotas = require('./rotas/orderRotas');
const { connectDatabase } = require('./config/database');
const { errorHandler } = require('./middleware/errorHandler');
const path = require('path');

const app = express();
const PORT = 3000;

// Conectar ao banco de dados
connectDatabase();

// Middleware para parsing do corpo da requisição
app.use(express.json());

// Rotas
app.use('/auth', authRotas);
app.use('/produtos', produtoRotas);
app.use('/orders', orderRotas);

// Middleware para tratamento de erros
app.use(errorHandler);

// Configurar o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
