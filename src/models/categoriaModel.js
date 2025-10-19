const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

const obtenerTodoscategorias = async () => {
  return await db('categorias').select('*');
};


const obtenerPorId = async (id) => {
  return await db('categorias')
    .where({ id })
    .first();
};

const eliminarCategoria = async (id) => {
  return await db('categorias')
    .where({ id })
    .delete();
};

const actualizarCategoria = async (id,datos ) => {
  const [categorias] = await db('categorias').where({id}).update(datos).returning("*")
  return categorias
}

const crearCategoria = async (datos) => {
  const [categorias] = await db('categorias').insert(datos).returning("*")
  return categorias
}

module.exports = {
  obtenerTodoscategorias,
  obtenerPorId,
  eliminarCategoria,
  actualizarCategoria,
  crearCategoria
};