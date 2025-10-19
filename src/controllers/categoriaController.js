const categoriaService = require('../services/categoriaService');
const {validationResult} = require('express-validator')


const obtenerAllcategoria = async (req, res) => {
  try {
    const productos = await categoriaService.obtenerCategoriasall();   
    return res.status(200).json(productos);                
  } catch (error) {
    console.error('Error en obtenerTodos:');     
    return res.status(500).json({ error: 'Error en el servidor' });
  }
};

const categoriaPorid = async (req, res) => {
  try{
    const {id} = req.params;
    const categoria = await categoriaService.obtenerCategoriaid(id);
    if (!categoria){
      return res.status(404).json({
        ok: false,
        message: 'Categoria no encontrada'
      });
    }
    return res.status(200).json({
      ok: true,
      data: categoria,
      message: 'Categoria obtenido correctamente'
    });
  }catch (error){
    console.error("error en categoriaPorid", error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
    });

  }
}

const eliminarCategoria = async (req,res) => {
  try{
    const {id} = req.params;
    const categoria = await categoriaService.eliminarCategoria(id);
    if (!categoria){
      return res.status(404).json({
        ok: false,
        message: 'Categoria no encontrada'
      });
    }
    return res.status(200).json({
      ok: true,
      data: categoria,
      message: 'Categoria eliminada correctamente'
    })
  }catch (error){
    console.error("error en eliminarCategoria", error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
  })
}}

const actualizarCategoria = async (req,res) =>{
  try{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        ok:false,
        message: errores.array()
      })
    }
    const {id} = req.params;
    const datos = req.body;
    const categoria = await categoriaService.actualizarCategoria(id,datos)
    return res.status(200).json({
      ok: true,
      data: categoria,
      message: 'Categoria actualizada'
    }) 
  }catch (error){
    console.error("error en actualizarCategoria", error);
    return res.status(500).json({
      ok: false,
      message: 'Error interno del servidor'
  })
}}

const crearCategoria = async (req,res) => {
  try{
    const errores = validationResult(req);
    if(!errores.isEmpty()){
      return res.status(400).json({
        ok: false,
        errores: errores.array()  // devuelve array de errores
      });
    }
    const datos = req.body;
    const categoria = await categoriaService.crearCategoria(datos);
    return res.status(201).json({
      ok: true,
      data: categoria,
      message: 'Categoria creada'
    })
  }catch(error){
    console.error("error en crearCategoria", error);
    return res.status(500).json({
    ok: false,
    message: 'Error interno del servidor'
  })
}}


module.exports = {
  obtenerAllcategoria,
  categoriaPorid,
  eliminarCategoria,
  actualizarCategoria,
  crearCategoria
};