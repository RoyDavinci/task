/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      id: 1,
      firstName: 'firstName #1',
      lastName: 'lastName #1',
      email: 'example1@nest.it',
      password: 'dfghjkl',
    },
    {
      id: 2,
      firstName: 'firstName #2',
      lastName: 'lastName #2',
      email: 'example2@nest.it',
      password: 'fghjkiuhg',
    },
    {
      id: 3,
      firstName: 'firstName #3',
      lastName: 'lastName #3',
      email: 'example3@nest.it',
      password: 'fghjk',
    },
  ]);
};
