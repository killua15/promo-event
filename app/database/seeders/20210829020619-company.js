'use strict';
const companies = require("../mocks/company.mock");
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('companies',companies, {});
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('companies', null, {});
     
  }
};
