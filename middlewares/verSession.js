module.exports = function(req,res, next) {
    console.log(req.session.usuarioLogueado);
    next()
}