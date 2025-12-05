const db = require('../src/db');

// Antes de todos los tests: verificar conexión
beforeAll(async () => {
    try {
        await db.raw('SELECT 1');
        console.log('✅ Conectado a base de datos de test');
    } catch (error) {
        console.error('❌ Error conectando a la base de datos de test:', error.message);
        throw error;
    }
});

// Después de cada test: limpiar las tablas (en orden por foreign keys)
afterEach(async () => {
    await db('productos').del();
    await db('categorias').del();
    await db('usuarios').del();
});

// Después de todos los tests: cerrar conexión
afterAll(async () => {
    await db.destroy();
    console.log('🔌 Conexión a base de datos cerrada');
});

module.exports = { db };
