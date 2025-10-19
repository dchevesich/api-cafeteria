const CategoriaModel = require('../models/categoriaModel');

const obtenerCategoriasall = async () =>{
    return await CategoriaModel.obtenerTodoscategorias();

}


const obtenerCategoriaid = async (id) =>{
    return await CategoriaModel.obtenerPorId(id);

}


const eliminarCategoria = async (id) =>{
    return await CategoriaModel.eliminarCategoria(id);

}

const actualizarCategoria = async (id,datos) => {
  return await CategoriaModel.actualizarCategoria(id,datos)
}

const crearCategoria = async (datos) => {
  return await CategoriaModel.crearCategoria(datos)
}



module.exports = {
  obtenerCategoriasall,
  obtenerCategoriaid,
  eliminarCategoria,
  actualizarCategoria,
  crearCategoria
};