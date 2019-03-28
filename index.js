const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development);
const server = express();
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.send('Api Workin')
});

server.get('/api/recipes', (req, res) => {
    db('recipes').then(recipes => {
      res.status(200).json(recipes);
    }).catch(err => {res.status(500).json(err)});
  })

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});