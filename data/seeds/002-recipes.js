
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "yummy", dish_id: 1 },
        { name: "yummyness", dish_id: 2 },
        { name: "yummynesser", dish_id: 3 }
      ]);
    });
};
