const request = require('supertest');
const app = require('../../app');
const db = require('../../src/db');
const bcrypt = require('bcrypt');

describe('API Auth', () => {

    describe('POST /api/auth/login', () => {
        beforeEach(async () => {
            // Crear un usuario de prueba antes de cada test de auth
            const hashedPassword = await bcrypt.hash('password123', 10);
            await db('usuarios').insert({
                email: 'test@cafeteria.com',
                password: hashedPassword,
                nombre: 'Usuario Test',
                rol: 'admin'
            });
        });

        it('debería hacer login exitoso con credenciales correctas', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'test@cafeteria.com',
                    password: 'password123'
                });

            expect(response.status).toBe(200);
            expect(response.body.ok).toBe(true);
            expect(response.body).toHaveProperty('token');
        });

        it('debería retornar error 401 con email incorrecto', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'noexiste@cafeteria.com',
                    password: 'password123'
                });

            expect(response.status).toBe(401);
            expect(response.body.ok).toBe(false);
        });

        it('debería retornar error 401 con password incorrecto', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'test@cafeteria.com',
                    password: 'passwordincorrecto'
                });

            expect(response.status).toBe(401);
            expect(response.body.ok).toBe(false);
        });

    });

});
