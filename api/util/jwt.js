const JWT = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const CreateTokenUserIdAndEmail = (id, email) => {
    return JWT.sign({id, email}, 'secret', {expiresIn: maxAge})
}

const CreateCookieByUsername = ( username ) => {
    return JWT.sign({username}, 'secret', {expiresIn: maxAge})
}



module.exports = {CreateTokenUserIdAndEmail, CreateCookieByUsername};