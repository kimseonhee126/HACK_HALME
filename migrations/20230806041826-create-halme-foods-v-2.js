'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HALME_FOODS_V2s', {
      foodTypeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      foodName: {
        type: Sequelize.STRING
      },
      foodPrice: {
        type: Sequelize.INTEGER
      },
      foodCategory: {
        type: Sequelize.STRING
      },
      foodImage: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HALME_FOODS_V2s');
  }
};