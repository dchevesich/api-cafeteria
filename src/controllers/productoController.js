const productoService = require('../services/productoService');
const {validationResult} = require('express-validator')

const obtenerTodos = async (req, res) => {
  try {
    const productos = await productoService.obtenerTodos();
    return res.status(200).json({
      ok: true,
      data: productos,
      message: 'Productos obtenidos correctamente'
    });
  } catch (error) {
    console.error('Error en obtenerTodos:', error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
};

const obtenerPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await productoService.obtenerPorId(id);
    
    if (!producto) {
      return res.status(404).json({
        ok: false,
        message: 'Producto no encontrado'
      });
    }
    
    return res.status(200).json({
      ok: true,
      data: producto,
      message: 'Producto obtenido correctamente'
    });
  } catch (error) {
    console.error('Error en obtenerPorId:', error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
};

const crear = async (req, res) => {
  try {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
       return res.status(400).json({
        ok: false,
        errores: errores.array()  // devuelve array de errores
      });
    }
    
    const datos = req.body;
    const nuevoProducto = await productoService.crear(datos);
    return res.status(201).json({
      ok: true,
      data: nuevoProducto,
      message: 'Producto creado correctamente'
    });
    
  } catch (error) {
    console.error('Error en crear:', error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
};

const actualizar = async (req, res) => {
  try {
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        ok: false,
        errores: errores.array()
      })
    }
    const { id } = req.params;
    const datos = req.body;
    
    const productoActualizado = await productoService.actualizar(id,datos);
    return res.status(200).json({
      ok: true,
      data: productoActualizado,
      message: 'Producto actualizado correctamente'
    });
  } catch (error) {
    console.error('Error en actualizar:', error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
};

const eliminar = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminados = await productoService.eliminar(id);
    
    if (eliminados === 0) {
      return res.status(404).json({
        ok: false,
        message: 'Producto no encontrado'
      });
    }
    
    return res.status(200).json({
      ok: true,
      message: 'Producto eliminado correctamente'
    });
  } catch (error) {
    console.error('Error en eliminar:', error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });
  }
};


module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};