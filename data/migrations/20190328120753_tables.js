
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dish', (tbl) => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.timestamps( true, true)
  })

  .createTable('recipes', (tbl) => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable();
      
      tbl
        .integer('dish_id') // the column name in this table (users)
        .unsigned()
        .references('id') // primary key in the related (parent) table (roles)
        .inTable('dish')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.timestamps( true, true)
  })
  
  .createTable('ingredients', (tbl) => {
    tbl.increments();

    tbl.string('name',128).notNullable();
  })

  .createTable('recipe-ingredients', (tbl) => {
    tbl.increments();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

  })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('dish')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe-ingredients');
};
