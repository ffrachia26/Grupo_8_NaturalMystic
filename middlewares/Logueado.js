module.exports = function(req,res, next) {
    if (req.session.usuarioLogueado.email == 'francisco@naturalmystic.com' || req.session.usuarioLogueado.email == 'matias@naturalmystic.com'){
		req.session.usuarioLogueado = 1
	} else {
		req.session.usuarioLogueado = 0
	}

}