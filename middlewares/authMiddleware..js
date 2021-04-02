function authMiddleware (req, res, next){
    if (req.session.usuarioLogueado != undefined){
        next();
    } else {
        res.send('Esta ruta es para administradores')
    }
}

module.exports = authMiddleware