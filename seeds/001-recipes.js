
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "hotdogs"},
        {name: "pickled cucumbers"},
        {name: "hamburger"}
      ]);
    });
};