import express, {Application, Request, Response} from 'express';
import dotenv from './config/dotenv';
import {connect} from 'mongoose';
import middleware from './middleware/App'
// Import Routers
import auth from './router/Auth';

const app: Application = express();

const port: Number = dotenv.PART;
const HostURL: String = dotenv.HostURL;
const MongoDB_URL = dotenv.mongoDB;

connect(MongoDB_URL)
    .then(() => {
        app.listen(port, ()=>{
            console.log(HostURL)
        })
    }).catch(err => console.log(err))

// Middleware
middleware(app);

// Routers
app.use(auth);