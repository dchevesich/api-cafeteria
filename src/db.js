// Conexión centralizada a la base de datos
const knex = require('knex');
const knexConfig = require('../knexfile');

// Usa el entorno según NODE_ENV (development, test, production)
const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

module.exports = db;
