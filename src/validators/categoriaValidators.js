const { body } = require('express-validator');

const validarCrearCategoria = [
  body('nombre')
    .notEmpty().withMessage('Nombre es requerido').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
  
  body('descripcion')
    .notEmpty().withMessage('Descripcion es requerida').isLength({ min: 3 }).withMessage('Mínimo 3 caracteres')
  
];

const validarActualizarCategoria = [
    body('nombre').optional().isLength({min:3}),
    body('descripcion').optional().isLength({min:3}),
]

module.exports = {
  validarCrearCategoria,
  validarActualizarCategoria
};