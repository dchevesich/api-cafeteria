const { body } = require('express-validator');

const validarCrearProducto = [
  body('nombre')
    .notEmpty().withMessage('Nombre es requerido')
    .isLength({ min: 3 }).withMessage('Mínimo 3 caracteres'),
  
  body('precio')
    .isFloat({ min: 0 }).withMessage('Precio debe ser mayor a 0'),
  
  body('stock')
    .isInt({ min: 0 }).withMessage('Stock debe ser un número entero mayor o igual a 0')
];

const validarActualizarProducto = [
    body('nombre').optional().isLength({min:3}),
    body('precio').optional().isFloat({min:0}),
    body('stock').optional().isInt({min:0})
]

module.exports = {
  validarCrearProducto,
  validarActualizarProducto
};