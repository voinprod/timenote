
exports.up = function(knex, Promise) {
  return knex.schema.createTable('item', t => {
    t.increments('id').unsigned().primary();
    t.string('text').notNull();
    t.string('pwd').notNull();
    t.string('url').notNull();
    t.timestamp('created_at').defaultTo(knex.fn.now());
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('item');
};
