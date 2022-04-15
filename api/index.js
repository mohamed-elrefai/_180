const express = require('express');
const app = express();
require('dotenv').config();

// Connect MongoDB
require('./DB/Mongo')(app)

// Middleware
require('./middleware/Index')(app);

// Routers
require('./connection/routers')(app);