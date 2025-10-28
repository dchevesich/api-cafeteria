const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);


const buscarPorEmail = async (email) =>{
    return await db('usuarios').where({email}).first();
};






module.exports = {
  buscarPorEmail,
};