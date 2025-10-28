const express = require('express');
const router = express.Router();
// Se importan los controllers para mapearlos a las rutas
const productoController = require('../controllers/productoController');
const { validarCrearProducto, validarActualizarProducto } = require('../validators/productoValidators');
const { autenticar, verificarRol } = require('../middlewares/authMiddleware');

// Obtener todos los productos desde el controller obtenerTodos
router.get('/', productoController.obtenerTodos);  

// Obtener un producto por ID
router.get('/:id', productoController.obtenerPorId);

// Crear un producto
router.post('/', autenticar, verificarRol(['admin', 'cajero']), validarCrearProducto, productoController.crear);

// Actualizar un producto
router.put('/:id', autenticar, verificarRol(['admin','cajero']), validarActualizarProducto, productoController.actualizar);

// Eliminar un producto
router.delete('/:id', autenticar, verificarRol(['admin']), productoController.eliminar);

module.exports = router;