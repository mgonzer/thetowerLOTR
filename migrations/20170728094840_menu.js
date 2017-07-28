
exports.up = function(knex, Promise) {
  return knex.schema.createTable('menu', table => {
    table.increments('id').primary();
    table.text('item_name');
    table.text('item_description');
    table.integer('item_price');
    table.text('url_image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('menu');
};
