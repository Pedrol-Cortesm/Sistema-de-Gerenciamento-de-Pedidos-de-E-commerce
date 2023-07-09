const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://localhost/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectado ao banco de dados');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

module.exports = { connectDatabase };
