exports.seed = async function(knex) {
  await knex('categorias').delete();
  
  await knex('categorias').insert([
    { nombre: 'cafe', descripcion: 'Espresso, americano, latte, cappuccino' },
    { nombre: 'te', descripcion: 'Té verde, negro, herbal' },
    { nombre: 'jugo', descripcion: 'Jugos naturales y smoothies' },
    { nombre: 'postre', descripcion: 'Tortas, galletas, brownies' },
    { nombre: 'snack', descripcion: 'Sándwiches, empanadas, salados' }
  ]);
};