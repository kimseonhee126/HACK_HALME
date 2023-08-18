'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'HALME_FOODS_V2s',
      [
        // 과일
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

        // 남기윤 -> 육류
        {
          foodTypeId: '육류1',
          foodName: '도드람한돈 삼겹살 구이용 500g',
          foodPrice: 12500,
          foodCategory: '육류',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168379182782465522.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
        },
        {
          foodTypeId: '육류2',
          foodName: '도드람 한돈 양념왕구이 돼지갈비구이 숯불 양념목살 630g',
          foodPrice: 12900,
          foodCategory: '육류',
          foodImage: 'https://shop-phinf.pstatic.net/20230223_85/16771591160844G3eT_JPEG/78294895803763979_242045371.jpg?type=m510',
        },
        {
          foodTypeId: '육류3',
          foodName: '마장동 투뿔 한우 구이용 모듬 800g',
          foodPrice: 69000,
          foodCategory: '육류',
          foodImage: 'https://shop-phinf.pstatic.net/20230624_211/16875694817454Drob_JPEG/38255925723812352_2009338837.jpg?type=m510',
        },
        {
          foodTypeId: '육류4',
          foodName: '오리장각 오리다리살 오리통다리 5kg 국내산 냉동',
          foodPrice: 38000,
          foodCategory: '유제품',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/20635663/1684826908762.jpg?gif=1&w=850&h=850&c=c&webp=1',
        },

        // 유지인 -> 채소
        {
          foodTypeId: '채소1',
          foodName: '야채왕 꽃상추 500g',
          foodPrice: 9900,
          foodCategory: '채소',
          foodImage: 'https://mblogthumb-phinf.pstatic.net/MjAxOTA0MjlfMTI0/MDAxNTU2NTE5NjY1MzUw.fR5qgpBxhJzQr0NJfXUIcoCiTfhOA7JB6vkMs1sp4YQg.BWVH9O1F8SEJtIHVkS7NKEAQ-FsN_03tredKgJ4jlNsg.PNG.diligent119/IMG_6807-3.png?type=w800',
        },
        {
          foodTypeId: '채소2',
          foodName: '해남 꿀고구마 호박고구마 10kg',
          foodPrice: 52900,
          foodCategory: '채소',
          foodImage: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/2b96/fe7e61631cc663223543f2578b71872e6c8318bca2d685cd286bc7040aea.jpg',
        },
        {
          foodTypeId: '채소3',
          foodName: '국내산 신선하고 싱싱한 양상추 1봉지 500g',
          foodPrice: 7090,
          foodCategory: '채소',
          foodImage: 'https://post-phinf.pstatic.net/MjAxOTEyMThfMTgz/MDAxNTc2NjU2OTg2MDAz.BYZhD2eVEQXzRL_wnh_OQc5bNRfjBcLiUEXRPNSwOfgg.kroNDVym9VZ37Ir7XTo11zYttDg9dxFkndLvqVdYUuYg.JPEG/27550805_l.jpg?type=w800_q75',
        },
        {
          foodTypeId: '채소4',
          foodName: '친환경 깻잎 150g',
          foodPrice: 5980,
          foodCategory: '채소',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/4778830609607725-ff43d444-8db3-4bd3-b287-5e9c1635b00a.jpg',
        },

        // 이희주 -> 수산물
        {
          foodTypeId: '수산물1',
          foodName: '해신수산 40~70미 1kg_꼬마전복',
          foodPrice: 19760,
          foodCategory: '수산물',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/5119/73dbe19de3fa3bb721cf43178eedadef8ee162af7c038a3cc751ff47e68b.jpg',
        },
        {
          foodTypeId: '수산물2',
          foodName: '명품 법성포 영광굴미 20미  40미 ',
          foodPrice: 79000,
          foodCategory: '수산물',
          foodImage: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8d2c/b9a839a75b97e5882beea458f74bcb5dfccd1482e8c0cd97919844c3b778.jpg',
        },
        {
          foodTypeId: '수산물3',
          foodName: '100% 자연산 참 옥돔 10미(1,600g 이상)',
          foodPrice: 96800,
          foodCategory: '수산물',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/ed94/8fb0bde37e0153e9c8e5898eada4c2c8177a25304ee7c3f6f91830de33f1.jpg',
        },
        {
          foodTypeId: '수산물4',
          foodName: '당일조업 제철생선 생물 잡어 생선구이 매운탕 탕거리 손질후 3kg',
          foodPrice: 29000,
          foodCategory: '수산물',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/9b78/2058c446b5d39a53fd72ca298b1ddd7d79fe975fe4d22e730b2393d69f85.jpg',
        },

        // 김선희 -> 쌀
        {
          foodTypeId: '쌀1',
          foodName: '씻어나온 현미, 4kg, 1통',
          foodPrice: 15900,
          foodCategory: '쌀',
          foodImage: 'https://thumbnail8.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/86718469040043-b5cf5e35-f6dd-4914-8a9c-0298f9b1e9e7.jpg',
        },
        {
          foodTypeId: '쌀2',
          foodName: '당당한 우리쌀 4kg(햅쌀 상등급), 1개',
          foodPrice: 16400,
          foodCategory: '쌀',
          foodImage: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/8648/14e1ca95c90976db90896c2ad1a1346a97ba3400d6a5103f09c349b7d5f5.jpg',
        },
        {
          foodTypeId: '쌀3',
          foodName: '2022년산 햇현미 당일도정 농협 농부 와우렁이 친환경 유기농 현미 10kg, 20kg, 1개',
          foodPrice: 35900,
          foodCategory: '쌀',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/vendor_inventory/6d5c/b9e39d7b5aef0245d9066d9b71ff6b668549cadd30762be68c0cdf8632f4.jpg',
        },
        {
          foodTypeId: '쌀4',
          foodName: '대구상회 찰현미, 1개, 5kg',
          foodPrice: 12900,
          foodCategory: '유제품',
          foodImage: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/556589064360997-5b40a1c2-7f1f-42ab-be9e-83909c94451c.jpg',
        },

        // 견과류
        {
          foodTypeId: '견과류1',
          foodName: '대구상회 찰현미, 1개, 5kg',
          foodPrice: 17100,
          foodCategory: '견과류',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168005874876628379.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
        },
        {
          foodTypeId: '견과류2',
          foodName: '가을향기 국산 잣 300g',
          foodPrice: 35600,
          foodCategory: '견과류',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168611896273920147.jpg?gif=1&w=1024&h=1024&c=c&webp=1',
        },
        {
          foodTypeId: '견과류3',
          foodName: '캘리포니아 구운 아몬드 500g',
          foodPrice: 9990,
          foodCategory: '견과류',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168007524739254817.jpg?gif=1&w=1024&h=1024&c=c&webp=1',
        },
        {
          foodTypeId: '견과류4',
          foodName: '원데이 요거트해바라기씨 24봉',
          foodPrice: 11900,
          foodCategory: '견과류',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/166373910782080215.jpg?gif=1&w=1024&h=1024&c=c&webp=1',
        },
        // 건어물
        {
          foodTypeId: '건어물1',
          foodName: '용대리 황태포 10미 41-43cm 특 북어포',
          foodPrice: 34900,
          foodCategory: '건어물',
          foodImage: 'https://shop-phinf.pstatic.net/20200310_130/1583772199133U6tXG_JPEG/21133741743823801_2130134498.jpg?type=m510',
        },
        {
          foodTypeId: '건어물2',
          foodName: '국산 지리멸치 500g',
          foodPrice: 15900,
          foodCategory: '건어물',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168058422794237367.jpg?gif=1&w=850&h=850&c=c&webp=1',
        },
        {
          foodTypeId: '건어물3',
          foodName: '국내 가공한 배오징어 10미 750g',
          foodPrice: 56900,
          foodCategory: '건어물',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168136498697171068.jpg?gif=1&w=850&h=850&c=c&webp=1',
        },
        {
          foodTypeId: '건어물4',
          foodName: '국내산 동해안 마른 쫄쫄이 오징어 300g',
          foodPrice: 22500,
          foodCategory: '건어물',
          foodImage: 'https://image.ohou.se/i/bucketplace-v2-development/uploads/openapi/18548930/1687251653390.jpg?gif=1&w=850&h=850&c=c&webp=1',
        },
        // 잡곡
        {
          foodTypeId: '잡곡1',
          foodName: '국산 혼합 17곡, 4kg, 1개',
          foodPrice: 14900,
          foodCategory: '잡곡',
          foodImage: 'https://thumbnail7.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/3044770231149074-168a2b7c-d94a-461a-b252-565e1894f123.png',
        },
        {
          foodTypeId: '잡곡2',
          foodName: '찰기있는 12곡(잡곡) 3.8kg 당일',
          foodPrice: 15900,
          foodCategory: '잡곡',
          foodImage: 'https://shop-phinf.pstatic.net/20221207_136/1670382967888fIdAF_JPEG/23d1e565-0e30-4265-a6c5-e4a885758d78.jpg?type=f300',
        },
        {
          foodTypeId: '잡곡3',
          foodName: '혼합곡 17곡 4kg 국산 무농약 혼합잡곡',
          foodPrice: 9800,
          foodCategory: '잡곡',
          foodImage: 'https://shopping-phinf.pstatic.net/main_8103732/81037328984.1.jpg?type=f300',
        },
        {
          foodTypeId: '잡곡4',
          foodName: '대구농산 씻어나온 웰빙 혼합 10곡, 4kg, 1통',
          foodPrice: 14980,
          foodCategory: '잡곡',
          foodImage: 'https://thumbnail6.coupangcdn.com/thumbnails/remote/230x230ex/image/retail/images/98378253501600-5698bd7e-5df5-4822-b974-a6b9d5a0c99e.jpg',
        },
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('HALME_FOODS_V2s', null, {});
  },
};
