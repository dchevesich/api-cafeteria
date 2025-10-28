const express = require('express');
const router = express.Router();
// Se importan los controllers para mapearlos a las rutas
const categoriaController = require('../controllers/categoriaController');
// Se importan validaciones
const { validarCrearCategoria, validarActualizarCategoria } = require('../validators/categoriaValidators');
const { autenticar, verificarRol } = require('../middlewares/authMiddleware');

router.get('/:id', categoriaController.categoriaPorid)
router.get('/', categoriaController.obtenerAllcategoria)
router.delete('/:id', autenticar, verificarRol(['admin']), categoriaController.eliminarCategoria)
router.put('/:id', autenticar, verificarRol(['admin']), validarActualizarCategoria, categoriaController.actualizarCategoria)
router.post('/', autenticar, verificarRol(['cajero', 'admin']), validarCrearCategoria, categoriaController.crearCategoria)

module.exports = router;    