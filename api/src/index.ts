import express, { Application } from 'express';
import mongo, { ConnectOptions } from 'mongoose';
import logger from './util/logger'
import dotenv from './config/dotenv';
import middleware from './middleware/middleware';
import Auth from './router/Auth.routes'
import product from './router/Products.routes';
import user from './router/User.routes'
const app: Application = express();

const Port: Number = dotenv.port;
const MongoDB: string = dotenv.MongoDB;
const URL: String = dotenv.URL;

// Connect MongoDB
mongo.connect(MongoDB, { useNewUrlParser: true ,useUnifiedTopology: true } as ConnectOptions)
    .then((): void => {
        app.listen(Port,():void =>{
            logger.info(URL)
        })
    }).catch(err => console.log(err));

// Middleware
middleware(app);

// Router
app.use(Auth)
app.use(product);
app.use(user)