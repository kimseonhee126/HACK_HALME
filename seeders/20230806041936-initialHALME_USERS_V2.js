'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'HALME_USERS_V2S',
      [
        {
          id: 1,
          userName: '김선희',
          userPhone: '010-4924-5721',
          userAddress: '서울시 양천구 목동동로 130',
          userPoint: 0,
          userCart: '과일0',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('HALME_USERS_V2S', null, {});
  },
};
