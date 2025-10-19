const ProductoModel = require('../models/productoModel');

const obtenerTodos = async () => {
  return await ProductoModel.obtenerTodos();  
};

const obtenerPorId = async (id) => {
  return await ProductoModel.obtenerPorId(id);  
};

const crear = async (datos) => {
  return await ProductoModel.crear(datos);
};

const actualizar = async (id, datos) => {
  return await ProductoModel.actualizar(id,datos);  
};

const eliminar = async (id) => {
  return await ProductoModel.borrar(id);
};

module.exports = {
  obtenerTodos,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};