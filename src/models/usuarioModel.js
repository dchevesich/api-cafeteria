const db = require('../db');

const buscarPorEmail = async (email) => {
  return await db('usuarios').where({ email }).first();
};

module.exports = {
  buscarPorEmail,
};