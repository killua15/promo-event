'use strict';
const system = require("../mocks/system.mock")
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('systems', system, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('systems', null, {});
  }
};
