const JWT = require('jsonwebtoken');
const User = require('../model/User.Model');
// Get Token
const verifyToken = (req, res, next) => {
    const token =
    req.body.token || req.query.token || req.headers["token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    try {
        const decoded = JWT.verify(token, 'secret');
        // Get user data
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
}

module.exports = verifyToken;