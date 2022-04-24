const JWT = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const CreateTokenUserIdAndEmail = (id, email, username, profileImages) => {
    return JWT.sign({id, email, profileImages, username}, 'secret', {expiresIn: maxAge})
}

const CreateCookieByUsername = ( username ) => {
    return JWT.sign({username}, 'secret', {expiresIn: maxAge})
}



module.exports = {CreateTokenUserIdAndEmail, CreateCookieByUsername, maxAge};