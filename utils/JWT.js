const jwt = require('jsonwebtoken');
const maxAge = 3 * 24 * 60 * 60 * 1000;

const CreateCookieUserId = (id) => {
    return jwt.sign({id}, 'net', {expiresIn: maxAge})
}

const CreateCookieUsername = (username) => {
    return jwt.sign({username}, 'net', {expiresIn: maxAge})
}

module.exports = {maxAge, CreateCookieUserId, CreateCookieUsername}