/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('palavras_chave', [fakePalavraChave()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('palavras_chave', null, {});
  },
};

function fakePalavraChave() {
  const palavra_chave = faker.word.adjective();
  return { palavra_chave };
}
