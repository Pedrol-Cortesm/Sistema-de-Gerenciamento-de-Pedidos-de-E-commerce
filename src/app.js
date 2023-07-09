const express = require('express');
const authRoutes = require('./rotas/authrotas');
const productRoutes = require('./rotas/productRoutes');
const orderRoutes = require('./rotas/orderRoutes');
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
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Middleware para tratamento de erros
app.use(errorHandler);

// Configurar o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
