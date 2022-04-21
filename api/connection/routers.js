const auth = require('../routers/Auth.routes')
const user = require('../routers/User.routes')
const post = require('../routers/Post.routes');

module.exports = (app) => { 
    app.use(auth)
    app.use(user)
    app.use(post);
}