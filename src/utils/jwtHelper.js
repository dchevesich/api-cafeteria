const jwt = require('jsonwebtoken');

const generarToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET, // de .env
    { expiresIn: '24h' }
  );
};

const verificarToken = (token) => {
  try{
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Token no válido');
  }
};

module.exports = { generarToken, verificarToken };