
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', (tbl) => {
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
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
