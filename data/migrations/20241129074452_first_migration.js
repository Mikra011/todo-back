/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('tasks', (table) => {
            table.increments('id'); // Auto-incrementing ID
            table.string('label').notNullable(); // Task description
            table.boolean('complete').notNullable().defaultTo(false); // Completion status
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('tasks')
};
