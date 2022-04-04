import  Jwt  from "jsonwebtoken";

let TokenUserIdById: Function;
const maxAge = 3 * 24 * 60 * 60 * 1000;

TokenUserIdById = (id: String) => {
    return Jwt.sign({id}, 'nwt ', {expiresIn: maxAge});
}

export default TokenUserIdById;