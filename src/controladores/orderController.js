const Order = require('../modelos/orderModel');

async function createOrder(req, res) {
  try {
    const { products, customer } = req.body;
    const order = await Order.create({ products, customer, status: 'Pendente' });
    res.status(201).json({ message: 'Pedido criado com sucesso', order });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
}

module.exports = { createOrder };
