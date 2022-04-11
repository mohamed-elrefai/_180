const express = require('express');
const morgan = require('morgan');

module.exports = (app) => {
    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(express.static('image'));
}