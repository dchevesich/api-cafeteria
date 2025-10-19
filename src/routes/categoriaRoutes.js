const express = require('express');
const router = express.Router();
// Se importan los controllers para mapearlos a las rutas
const categoriaController = require('../controllers/categoriaController');


router.get('/:id', categoriaController.categoriaPorid)

router.get('/', categoriaController.obtenerAllcategoria)

router.delete('/:id', categoriaController.eliminarCategoria)

router.put('/:id', categoriaController.actualizarCategoria)

router.post('/', categoriaController.crearCategoria)

module.exports = router;    