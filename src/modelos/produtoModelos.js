const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
});

const Produto = mongoose.model('Produto', productSchema);

module.exports = Produto;