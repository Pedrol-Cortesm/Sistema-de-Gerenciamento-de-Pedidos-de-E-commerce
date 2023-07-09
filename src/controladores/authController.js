const jwt = require('jsonwebtoken');
const User = require('../modelos/userModel');

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    if (req.body.password !== user.password) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: user._id }, 'chave-secreta-do-jwt');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao autenticar usuário' });
  }
}

module.exports = { login };
