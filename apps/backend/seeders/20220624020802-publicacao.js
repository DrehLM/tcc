/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publicacoes', [fakePublicacao()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('publicacoes', null, {});
  },
};

function fakePublicacao() {
  const titulo = faker.lorem.sentence();
  const ano = faker.date.past().getFullYear();
  const descricao = faker.lorem.sentence();
  const resumo = faker.lorem.paragraph();
  const abstract = faker.lorem.paragraph();
  return { titulo, ano, descricao, resumo, abstract };
}
