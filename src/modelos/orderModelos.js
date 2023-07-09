const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: 'Produto', required: true }],
  customer: { type: String, required: true },
  status: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
