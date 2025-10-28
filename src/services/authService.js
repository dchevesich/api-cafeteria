const usuarioModel = require('../models/usuarioModel');
const bcrypt = require('bcrypt');
const { generarToken } = require('../utils/jwtHelper');

const loginUsuario = async (email, password) => {
  // 1. Buscar usuario
  const buscarUsuario = await usuarioModel.buscarPorEmail(email)
  // 2. Si no existe, lanzar error
  if(!buscarUsuario){
   throw new Error('Credenciales incorrectas'); 
  }
  // 3. Comparar password
  const coincide = await bcrypt.compare(password, buscarUsuario.password);
    // 4. Si no coincide, lanzar error
    if (!coincide) {
    throw new Error('Credenciales incorrectas');
    }
   // 5. Generar token con userId y rol
   const token = generarToken({
    userId: buscarUsuario.id,
    rol: buscarUsuario.rol,
   })
  // 6. Retornar token
  return { 
  token,
  usuario: {
    id: buscarUsuario.id,
    email: buscarUsuario.email,
    nombre: buscarUsuario.nombre,
    rol: buscarUsuario.rol
  }
};
};

module.exports = { loginUsuario };