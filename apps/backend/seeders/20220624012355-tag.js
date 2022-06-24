/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tags', [fakeTag()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tags', null, {});
  },
};

function fakeTag() {
  const tag = faker.word.adjective();
  return { tag };
}
