const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
};

function find() {
  return db('recipes');
}

function findById(id) {
  return db('recipes')
    .where({ id })
    .first();
}
