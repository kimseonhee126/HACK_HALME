'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'HALME_FOODS_V2s',
      [
        {
          foodTypeId: '과일1',
          foodName: '새콤달콤 한입사과, 4.5kg(당일배송)',
          foodPrice: 19900,
          foodCategory: '과일',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/40f9/32476c0f34bb641bc9886524736c72a6e69ea1531ee24178f7f775ebd04f.jpg',
        },
        {
          foodTypeId: '과일2',
          foodName: '곰곰 세척 사과, 2kg, 1박스',
          foodPrice: 29700,
          foodCategory: '과일',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1012107513562-e687b1db-a6b8-4fdb-b72b-14131e8ee9c6.jpg',
        },
        {
          foodTypeId: '과일3',
          foodName: '아오리 햇 사과, 4.5kg(26~30과)',
          foodPrice: 16900,
          foodCategory: '과일',
          foodImage: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/3c5e/6675414ea78b686c754830404b4b57bacd9474e490e3f4477c1b82831820.jpg',
        },
        {
          foodTypeId: '과일4',
          foodName: '안동 세척사과, 2kg, 1개',
          foodPrice: 29800,
          foodCategory: '과일',
          foodImage: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4077982470539041-30b735f9-2b8c-41c4-9e36-7581ea5c567b.jpg',
        },
        {
          foodTypeId: '과일5',
          foodName: '곰곰 당도선별 사과, 2kg, 1봉',
          foodPrice: 25840,
          foodCategory: '과일',
          foodImage: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1223319024420480-acb55e36-1e67-41d3-8c21-e1e4d041c937.jpg',
        },
        {
          foodTypeId: '과일6',
          foodName: '베리밸리 페루산 냉동 딸기, 2kg',
          foodPrice: 12580,
          foodCategory: '과일',
          foodImage: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/15753494229897977-c9f2931e-5db5-4422-beec-a0c72a1b9c9d.jpg',
        },
        {
          foodTypeId: '과일7',
          foodName: '뉴뜨레 딸기(냉동), 1kg, 6개',
          foodPrice: 28400,
          foodCategory: '과일',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/11338455712457410-1d8445ca-aef0-4fa7-a72f-4c61aeec44d3.jpg',
        },
        {
          foodTypeId: '과일8',
          foodName: '곰곰 x 농협 당도선별 성주 참외, 2kg(5~8입), 1개',
          foodPrice: 19830,
          foodCategory: '과일',
          foodImage: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/1463191289026328-670a7f0f-5ba0-4c58-9e23-a71adeadaab8.jpg',
        },
        {
          foodTypeId: '과일9',
          foodName: '성주 참외 중과(18~23과) 5kg',
          foodPrice: 68700,
          foodCategory: '과일',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/2298/d4a60d831c1dae3be4cbf9b9891fdd6aac1667e9235cee6ac8e265e7a305.jpg',
        },
        {
          foodTypeId: '유제품1',
          foodName: '요플레 바이오플레 사과, 130ml, 16개',
          foodPrice: 5400,
          foodCategory: '유제품',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/72bf445d-414b-4f87-a606-604aeb197f6c5869275470857585804.png',
        },
        {
          foodTypeId: '유제품2',
          foodName: '요플레 바이오플레 사과, 130ml, 8개',
          foodPrice: 2700,
          foodCategory: '유제품',
          foodImage: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/5399073643040550-fb89b2a3-2a3b-4020-93b2-6033b6f5d038.jpg',
        },
        {
          foodTypeId: '유제품3',
          foodName: '서울우유 더진한 순수 플레인 요거트, 1.8L, 1개',
          foodPrice: 6710,
          foodCategory: '유제품',
          foodImage: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/10395318651159-0a8a970c-f5ca-433d-8b6d-61d75fed7856.JPG',
        },
        {
          foodTypeId: '유제품4',
          foodName: '서울우유 비요뜨 초코링 요거트, 138g, 12개',
          foodPrice: 12760,
          foodCategory: '유제품',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/6424568376671880-98084557-1dce-4312-a132-149f7adfc438.jpg',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('HALME_FOODS_V2s', null, {});
  },
};
