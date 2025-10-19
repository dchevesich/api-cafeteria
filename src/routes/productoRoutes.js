const express = require('express');
const router = express.Router();
// Se importan los controllers para mapearlos a las rutas
const productoController = require('../controllers/productoController');

// Obtener todos los productos desde el controller obtenerTodos
router.get('/', productoController.obtenerTodos);  

// Obtener un producto por ID
router.get('/:id', productoController.obtenerPorId);

// Crear un producto
router.post('/', productoController.crear);

// Actualizar un producto
router.put('/:id', productoController.actualizar);

// Eliminar un producto
router.delete('/:id', productoController.eliminar);

module.exports = router;