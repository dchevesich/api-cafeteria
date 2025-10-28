exports.up = function(knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable().unique();
    table.string('password').notNullable(); // hashear con bcrypt
    table.string('nombre').notNullable();
    table.enum('rol', ['admin', 'cajero', 'cliente']).defaultTo('cliente');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
};
