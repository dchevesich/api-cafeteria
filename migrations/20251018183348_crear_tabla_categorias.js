exports.up = function(knex) {
  return knex.schema.createTable('categorias', function(table) {
    table.increments('id').primary();
    table.string('nombre').notNullable();
    table.string('descripcion');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('categorias');
};