const express = require('express');
const cors = require('cors');
const productoRoutes = require('./src/routes/productoRoutes');  // Importa routes de productos
const categoriaRoutes = require('./src/routes/categoriaRoutes'); // Importa routes de categoria


const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'API Cafetería funcionando' });
});

// Usar las rutas de productos
app.use('/api/productos', productoRoutes);  // api/productos/
app.use('/api/categoria', categoriaRoutes);  // api/categoria/

// Servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});