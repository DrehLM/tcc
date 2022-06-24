/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');
const { initials } = require('./utils');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('instituicoes', [fakeInstituicao()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('instituicoes', null, {});
  },
};

function fakeInstituicao() {
  const nome = faker.company.companyName();
  const sigla = initials(nome.toUpperCase()).join('');
  const cidade = faker.address.cityName();
  const estado = faker.address.state();
  return { nome, sigla, cidade, estado };
}
