'use strict';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('edicoes', [fakeEdicao()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('edicoes', null, {});
  },
};

function fakeEdicao() {
  const edicao = faker.git.shortSha();
  const inicio = faker.date.past();
  const fim = faker.date.soon(7, inicio);
  const ano = inicio.getFullYear();
  return { edicao, ano, inicio, fim };
}
