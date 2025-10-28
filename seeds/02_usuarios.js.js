const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  await knex('usuarios').del();
  
  const passwordHasheada = await bcrypt.hash('password123', 10);
  
  await knex('usuarios').insert([
    {
      email: 'juan1@gmail.com',
      password: passwordHasheada,
      nombre: 'Juan',
      rol: 'admin'
    },
    {
      email: 'mario@gmail.com',
      password: passwordHasheada,
      nombre: 'Mario',
      rol: 'cajero'
    },
    {
      email: 'elias@gmail.com',
      password: passwordHasheada,
      nombre: 'Elias',
      rol: 'cliente'
    }
  ]);
};