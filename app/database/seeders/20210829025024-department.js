'use strict';
const departments = require("../mocks/department.mock")
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('departments',departments, {});
    
 },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('departments', null, {});
     
  }
};
