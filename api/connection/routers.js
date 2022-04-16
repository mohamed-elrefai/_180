const auth = require('../routers/Auth.routes')
const user = require('../routers/User.routes')

module.exports = (app) => { 
    app.use(auth)
    app.use(user)
}