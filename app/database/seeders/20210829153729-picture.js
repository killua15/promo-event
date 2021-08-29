'use strict';
const pictures = require("../mocks/pictures.mock")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('pictures',pictures, {});
  
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('pictures', null, {});
    
  }
};
