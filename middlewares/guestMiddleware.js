function guestMiddleware (req, res, next){
    if (req.session.usuarioLogueado == undefined){
        next();
    } else {
        res.send('Esta ruta es para invitados')
    }
}

module.exports = guestMiddleware