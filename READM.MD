# API Cafetería - Sistema de Gestión con Autenticación JWT

API RESTful para gestión de productos y categorías de una cafetería, implementando autenticación JWT y control de acceso basado en roles (RBAC).

## 🚀 Tecnologías

- **Backend:** Node.js, Express
- **Base de Datos:** PostgreSQL
- **ORM/Query Builder:** Knex.js
- **Autenticación:** JWT (JSON Web Tokens)
- **Validaciones:** Express-validator
- **Control de acceso:** Role-Based Access Control (RBAC)

## 📋 Características

- ✅ Autenticación con JWT
- ✅ Control de acceso por roles (Admin, Cajero)
- ✅ CRUD completo de productos
- ✅ CRUD completo de categorías
- ✅ Validaciones robustas con express-validator
- ✅ Respuestas estandarizadas
- ✅ Manejo de errores centralizado
- ✅ Migraciones de base de datos con Knex

## 👥 Roles y Permisos

| Rol | Productos | Categorías |
|-----|-----------|------------|
| **Admin** | ✅ Crear, Leer, Actualizar, Eliminar | ✅ Crear, Leer, Actualizar, Eliminar |
| **Cajero** | ✅ Crear, Leer, Actualizar | ✅ Crear, Leer |
| **No autenticado** | ✅ Leer | ✅ Leer |

## 🔧 Instalación
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/api-cafeteria.git

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env

# Ejecutar migraciones
npx knex migrate:latest

# (Opcional) Ejecutar seeds
npx knex seed:run

# Iniciar servidor
npm start
```

## 📝 Variables de Entorno
```env
# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=api_cafeteria

# JWT
JWT_SECRET=tu_super_secreto_seguro_aqui

# Servidor
PORT=5000
NODE_ENV=development
```

## 🔐 Endpoints de Autenticación

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@cafeteria.com",
  "password": "password123"
}
```

**Respuesta:**
```json
{
  "ok": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "email": "admin@cafeteria.com",
    "rol": "admin"
  }
}
```

## 📦 Endpoints de Productos

### Listar todos los productos
```http
GET /api/productos
```

### Obtener producto por ID
```http
GET /api/productos/:id
```

### Crear producto (requiere autenticación: admin o cajero)
```http
POST /api/productos
Authorization: Bearer {token}
Content-Type: application/json

{
  "nombre": "Café Americano",
  "precio": 2500,
  "stock": 100,
  "categoria_id": 1
}
```

### Actualizar producto (requiere autenticación: admin o cajero)
```http
PUT /api/productos/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "nombre": "Café Americano Grande",
  "precio": 3000,
  "stock": 150
}
```

### Eliminar producto (requiere autenticación: admin)
```http
DELETE /api/productos/:id
Authorization: Bearer {token}
```

## 🗂️ Endpoints de Categorías

### Listar todas las categorías
```http
GET /api/categoria
```

### Obtener categoría por ID
```http
GET /api/categoria/:id
```

### Crear categoría (requiere autenticación: admin o cajero)
```http
POST /api/categoria
Authorization: Bearer {token}
Content-Type: application/json

{
  "nombre": "Bebidas Calientes",
  "descripcion": "Café, té y chocolate caliente"
}
```

### Actualizar categoría (requiere autenticación: admin)
```http
PUT /api/categoria/:id
Authorization: Bearer {token}
Content-Type: application/json

{
  "nombre": "Bebidas",
  "descripcion": "Todo tipo de bebidas"
}
```

### Eliminar categoría (requiere autenticación: admin)
```http
DELETE /api/categoria/:id
Authorization: Bearer {token}
```

## 🏗️ Arquitectura del Proyecto
```
src/
├── controllers/     # Manejo de requests/responses
├── services/        # Lógica de negocio
├── routes/          # Definición de rutas
├── middlewares/     # Autenticación, validaciones
├── validators/      # Validaciones con express-validator
└── utils/           # Helpers (JWT, etc)
```

## 🧪 Ejemplos de Uso con cURL

**Login:**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@cafeteria.com","password":"admin123"}'
```

**Crear producto (con token):**
```bash
curl -X POST http://localhost:5000/api/productos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TU_TOKEN_AQUI" \
  -d '{"nombre":"Cappuccino","precio":3500,"stock":50}'
```

## 🔒 Seguridad

- ✅ Contraseñas hasheadas con bcrypt
- ✅ Tokens JWT con expiración (24h)
- ✅ Validación de entrada en todos los endpoints
- ✅ Control de acceso por roles
- ✅ Variables sensibles en .env

## 👨‍💻 Autor

**Danko Chevesich**
- GitHub: https://github.com/dchevesich
- LinkedIn: https://www.linkedin.com/in/danko-chevesich-4a04a7228/

## 📄 Licencia

MIT

---

**Desarrollado como proyecto de práctica en Neural Code AI - 2025**