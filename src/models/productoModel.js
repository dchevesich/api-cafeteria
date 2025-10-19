const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const obtenerTodos = async () => {
  return await db('productos').select('*');
};

const obtenerPorId = async (id) => {
  return await db('productos')
    .where({ id })
    .first();
};

const crear = async (datos) => {
  const [producto] = await db('productos')
    .insert(datos)  
    .returning('*');
  return producto;  
};

const actualizar = async (id, datos) => {  
  const [producto] = await db('productos')
    .where({ id })  
    .update(datos)  
    .returning('*');
  return producto;
};

const borrar = async (id) => {
  const eliminados = await db('productos')
    .where({ id })
    .delete();
  return eliminados;  
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  borrar
};