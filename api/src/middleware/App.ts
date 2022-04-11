import morgan from 'morgan';
import express, { Application } from 'express';
import cors from 'cors';

export default (app: Application) => {
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
}