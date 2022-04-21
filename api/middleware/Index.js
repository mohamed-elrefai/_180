const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports = (app) => {
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(express.static('file/images'))
    app.use(express.static('file/videos'))

}