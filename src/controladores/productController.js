const Product = require('../modelos/productModel');

async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;
    const product = await Product.create({ name, description, price });
    res.status(201).json({ message: 'Produto criado com sucesso', product });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
}

module.exports = { createProduct };
