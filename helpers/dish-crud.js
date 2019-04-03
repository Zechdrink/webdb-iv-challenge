const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
};

function find() {
  return db('dish');
}

function findById(id) {
  return db('dish')
    .where({ id })
    .first();
}
