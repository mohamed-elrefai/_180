const express = require('express');
const mongo = require('mongoose');
const auth = require('./routers/Auth.routes')
const app = express();
require('dotenv').config();

// Connect MongoDB
const port = process.env.PORT || 1999
mongo.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {{
        app.listen(port, () => {
            console.log(process.env.URLSITE)
        })        
    }}).catch(err => console.log(err))

// Middleware
require('./middleware/app')(app)

// Router
app.use(auth)