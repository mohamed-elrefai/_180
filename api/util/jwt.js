const JWT = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

const CreateTokenUserIdAndEmail = (id, email) => {
    return JWT.sign({id, email}, 'secret', {expiresIn: maxAge})
}

const CreateCookieByUsername = ( username ) => {
    return JWT.sign({username}, 'secret', {expiresIn: maxAge})
}

// Get Token
const verifyToken = (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = JWT.verify(token, 'secret');
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = {CreateTokenUserIdAndEmail, CreateCookieByUsername, verifyToken};