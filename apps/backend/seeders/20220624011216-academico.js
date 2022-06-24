/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('academicos', [fakeAcademico()], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('academicos', null, {});
  },
};

function fakeAcademico() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const nome = faker.name.findName(firstName, lastName);
  const email = faker.internet.email(firstName, lastName);
  const titulacao = faker.helpers.arrayElement([
    'Graduando',
    'Técnico',
    'Bacharel',
    'Licenciado',
    'Mestre',
    'Doutor',
  ]);
  return { nome, email, titulacao };
}
