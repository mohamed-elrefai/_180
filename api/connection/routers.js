const auth = require('../routers/Auth.routes')


module.exports = (app) => { 
    app.use(auth)
}