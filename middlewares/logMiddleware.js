const fs = require('fs')

function logMiddleware(req, res, next) {
    fs.writeFileSync
    next();
}

module.exports = logMiddleware