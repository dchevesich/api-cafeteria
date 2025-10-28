const authService = require('../services/authService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resultado = await authService.loginUsuario(email, password);
    
    return res.status(200).json({
      ok: true,
      ...resultado  
    });
    
  } catch (error) {
    console.error("Error en login:", error);
    return res.status(401).json({
      ok: false,
      message: error.message || 'Credenciales incorrectas'
    });
  }
};

module.exports = { login };