/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('trilhas', [fakeTrilha()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('trilhas', null, {});
  },
};

function fakeTrilha() {
  const nome = faker.company.catchPhrase();
  return { nome };
}
