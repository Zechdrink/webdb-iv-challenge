const express = require('express');
const helmet = require('helmet');

const dishRouter = require('./helpers/dish-router.js');
const recipeRouter = require('./helpers/recipe-router.js');

const server = express();
server.use(express.json());
server.use(helmet());

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send('Api Workin')
});

module.exports = server;