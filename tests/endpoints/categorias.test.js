const request = require('supertest');
const app = require('../../app');
const db = require('../../src/db');

describe('API Categorías', () => {

    describe('GET /api/categoria', () => {
        it('debería retornar un array vacío cuando no hay categorías', async () => {
            const response = await request(app).get('/api/categoria');

            expect(response.status).toBe(200);
            // Nota: este endpoint retorna el array directamente, no envuelto en {ok, data}
            expect(response.body).toEqual([]);
        });

        it('debería retornar todas las categorías', async () => {
            // Insertar datos de prueba
            await db('categorias').insert([
                { nombre: 'Bebidas Calientes', descripcion: 'Café, té, chocolate' },
                { nombre: 'Bebidas Frías', descripcion: 'Jugos, smoothies' }
            ]);

            const response = await request(app).get('/api/categoria');

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(2);
            expect(response.body[0]).toHaveProperty('nombre');
        });
    });

    describe('GET /api/categoria/:id', () => {
        it('debería retornar una categoría por ID', async () => {
            // Insertar una categoría
            const [categoria] = await db('categorias')
                .insert({ nombre: 'Postres', descripcion: 'Dulces y pasteles' })
                .returning('*');

            const response = await request(app).get(`/api/categoria/${categoria.id}`);

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
            expect(response.body.data.nombre).toBe('Postres');
        });

        it('debería retornar 404 si la categoría no existe', async () => {
            const response = await request(app).get('/api/categoria/99999');

            expect(response.status).toBe(404);
            expect(response.body.ok).toBe(false);
            expect(response.body.message).toBe('Categoria no encontrada');
        });
    });

});
