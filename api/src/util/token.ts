import Jwt from "jsonwebtoken";

var CreateTokenByUserId: Function;

const maxAge = 3 * 24 * 60 * 60;

CreateTokenByUserId = (id: Number) => {
    return Jwt.sign({id}, 'secret', {expiresIn: maxAge})
}

export default { CreateTokenByUserId, maxAge }