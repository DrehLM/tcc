/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');
const { initials } = require('./utils');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('eventos', [fakeEvento()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('eventos', null, {});
  },
};

function fakeEvento() {
  const nome = faker.company.catchPhrase();
  const sigla = initials(nome.toUpperCase()).join('');
  return { nome, sigla };
}
