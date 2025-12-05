const request = require('supertest');
const app = require('../../app');
const db = require('../../src/db');

describe('API Productos', () => {

    describe('GET /api/productos', () => {
        it('debería retornar un array vacío cuando no hay productos', async () => {
            const response = await request(app).get('/api/productos');

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
            expect(response.body.data).toEqual([]);
        });

        it('debería retornar todos los productos', async () => {
            // Insertar datos de prueba
            await db('productos').insert([
                { nombre: 'Café', descripcion: 'Café negro', precio: 2.50, stock: 100 },
                { nombre: 'Té', descripcion: 'Té verde', precio: 2.00, stock: 50 }
            ]);

            const response = await request(app).get('/api/productos');

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
            expect(response.body.data).toHaveLength(2);
            expect(response.body.data[0]).toHaveProperty('nombre');
            expect(response.body.data[0]).toHaveProperty('precio');
        });
    });

    describe('GET /api/productos/:id', () => {
        it('debería retornar un producto por ID', async () => {
            // Insertar un producto
            const [producto] = await db('productos')
                .insert({ nombre: 'Cappuccino', descripcion: 'Con espuma', precio: 3.50, stock: 30 })
                .returning('*');

            const response = await request(app).get(`/api/productos/${producto.id}`);

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
            expect(response.body.data.nombre).toBe('Cappuccino');
            expect(response.body.data.precio).toBe('3.50'); // PostgreSQL retorna decimal como string
        });

        it('debería retornar 404 si el producto no existe', async () => {
            const response = await request(app).get('/api/productos/99999');

            expect(response.status).toBe(404);
            expect(response.body.ok).toBe(false);
            expect(response.body.message).toBe('Producto no encontrado');
        });
    });

});
