const { verificarToken } = require('../utils/jwtHelper');

const autenticar = (req, res, next) => {
    try{
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({ 
        ok: false, 
        message: 'Token no proporcionado' 
      })}
      const token = authHeader.split(' ')[1];
      const payload = verificarToken(token);
      req.user = payload;
      next();

      }catch (error) {
    return res.status(401).json({ 
      ok: false, 
      message: 'Token inválido o expirado' 
    });
  }
};
    

const verificarRol = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!rolesPermitidos.includes(req.user.rol)) {
       return res.status(403).json({ 
        ok: false, 
        message: 'No tienes permisos para esta acción' 
      });
    }
      next();
  };
};

module.exports = { autenticar, verificarRol };