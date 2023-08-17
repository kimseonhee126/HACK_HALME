const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const db = require('./models/index');
const { Op } = require('sequelize');
const session = require('express-session');
const { Users } = db;
const { Foods } = db;

// static 파일 경로 위치 알려주기
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// html 파일 경로 위치 알려주기
app.set("view engine", 'html');
nunjucks.configure('./views', {
    express: app
});

// session 사용하기
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}));

// main 페이지
app.get('/', async (req, res) => {
    if (!req.session.login)
    {
        req.session.login = false
        req.session.idx = -1
    }
    res.render("main.html");
});

// search 페이지
app.get('/search', (req, res) => {
    res.render("search.html");
});

// category 페이지
app.get('/category', (req, res) => {
    res.render("category");
});

// category result 페이지
app.get('/categoryResult', async (req, res) => {
    const selectedProduct = req.query.product;

    try
    {
        const productData = await Foods.findAll({
            where: { foodTypeId: {[Op.like]: `%${selectedProduct}%`}},
        });
        console.log('categoryResult success!\n');
        res.render("result", {selectedProduct, productData});
    }
    catch (error)
    {
        console.error("Error load data from DB: ", error);
        res.status(500).send('Error 500');
    }
});

// search result 페이지
app.get('/searchResult', async (req, res) => {
    const selectedProduct = req.query.product;

    try
    {
        const productData = await Foods.findAll({
            where: { foodName: {[Op.like]: `%${selectedProduct}%`}},
        });
        console.log('searchResult success!\n');
        res.render("result", {selectedProduct, productData});
    }
    catch (error)
    {
        console.error("Error load data from DB: ", error);
        res.status(500).send('Error 500');
    }
});

// detail 페이지
app.get('/detail', async(req, res) => {
    const productName = req.query.productName;
    const productPrice = req.query.productPrice;
    const productImage = req.query.productImage;
    const foodTypeIdFromServer = req.query.productFoodTypeId;

    res.render("detail", { productName, productPrice, productImage, foodTypeIdFromServer });
});

// cart(장바구니) 페이지
app.get('/cart', async (req, res) => {
    const loginUser = req.session.username;
    const reqFoodTypeId = req.query.foodTypeId;

    // 로그인 되지 않은 상태면 -> login 페이지로 이동하기
    if (!loginUser || loginUser === undefined)
    {
        return res.render('login.html', { message: '로그인이 되어 있지 않습니다!!' });
    }

    try
    {
        // noncart -> 장바구니에 아무것도 없을 때
        const loginCart = await Users.findOne({
            where: { userName: loginUser},
        });

        if (!loginCart)
        {
            console.log('noncart 페이지 render 됨\n');
            res.render('noncart');
        }

        if (!loginCart.userCart || loginCart.userCart.length === 0)
        {
            console.log('noncart 페이지 render 됨\n');
            res.render('noncart');
        } else {
            // 장바구니에 있는 모든 품목들 보여주기 위해
            const cartItemsArray = loginCart.userCart.split(',').map(item => item.trim());
            console.log(cartItemsArray);

            // 중복 요소 관리
            let userCartSet = new Set(loginCart.userCart ? loginCart.userCart.split(',') : []);
            userCartSet.add(reqFoodTypeId);
            console.log('userCartSet: ', userCartSet);
            const userCartArray = Array.from(userCartSet);

            // 배열을 문자열로 변환하여 업데이트
            await Users.update(
                { userCart: userCartArray.join(',') },
                { where: { userName: loginUser } }
            );

            // 장바구니에 있는 item 조회
            const cartItems = await Foods.findAll({
                where: { foodTypeId: userCartArray }
            });

            console.log('cart 페이지 render 됨\n');
            res.render('cart', { cartItems });
        }
    }
    catch (error)
    {
        console.error("Error: ", error);
        res.status(500).send('Error 500');
    }
});

// orderList 주문내역 보기
app.get('/orderList', (req, res) => {
    res.render('orderList');
});

// payAddress 페이지 -> GET 요청
app.get('/payAddress', async (req, res) => {
    const loginUser = req.session.username;

    // 로그인 되지 않은 상태면 -> login 페이지로 이동하기
    if (!loginUser || loginUser === undefined)
    {
        return res.render('login.html', { message: '로그인이 되어 있지 않습니다!!' });
    }

    try
    {
        const loginAddress = await Users.findOne({
            where: { userName: loginUser},
        });
        console.log('payAddress 페이지 render 됨\n');
        res.render('payAddress', {loginAddress});
    }
    catch (err)
    {
        console.error('Error: ', err);
    }
});

// payAddress 페이지 -> POST 요청
app.post('/payAddress', async(req, res) => {
    const loginUser = req.session.username;
    const newAddress = req.body.newAddress;
    console.log(newAddress);

    if (!loginUser)
    {
        res.render('login');
    }

    try
    {        
        await Users.update(
            { userAddress: newAddress },
            { where: { userName: loginUser } }
        );
        console.log('success update address\n');
    }
    catch (err)
    {
        console.error('Error: ', err);
    }
})

// point 충전
app.get('/pointCharge', async (req, res) => {
    const loginUser = req.session.username;

    // 로그인 되지 않은 상태면 -> login 페이지로 이동하기
    if (!loginUser || loginUser === undefined)
    {
        return res.render('login.html', { message: '로그인이 되어 있지 않습니다!!' });
    }

    if (!loginUser)
    {
        res.render('login');
    }

    const loginPoint = await Users.findOne({
        where: { userName: loginUser }
    });

    console.log(loginPoint.userName, '\n');
    res.render('pointCharge', { loginPoint });
});

// point 충전 결과
app.get('/point', async (req, res) => {
    const loginUser = req.session.username;
    const pointResult = parseInt(req.query.pnumber);

    // 로그인 되지 않은 상태면 -> login 페이지로 이동하기
    if (!loginUser || loginUser === undefined)
    {
        return res.render('login.html', { message: '로그인이 되어 있지 않습니다!!' });
    }
    
    try
    {
        const point = await Users.findOne({
            where: { userName: loginUser }
        });

        const fixedPoint = parseInt(point.userPoint)
        const updatePoint = fixedPoint + pointResult;
        console.log(updatePoint, '\n');

        await Users.update(
            { userPoint: updatePoint },
            { where: { userName: loginUser } }
        );

        res.render('point', { pointResult });
    }
    catch (err)
    {
        console.error('Error: ', err);
        res.status(500).send('Error 500');
    }
});

// payDone 페이지
app.get('/payDone', async(req, res) => {
    const loginUser = req.session.username;

    // 로그인 되지 않은 상태면 -> login 페이지로 이동하기
    if (!loginUser || loginUser === undefined)
    {
        return res.render('login.html', { message: '로그인이 되어 있지 않습니다!!' });
    }

    try
    {
        const loginPoint = await Users.findOne({
            where: { userName: loginUser }
        });

        // payItemsArray에 해당 과일 저장
        const payItemsArray = loginPoint.userCart.split(',').map(item => item.trim());
        console.log(payItemsArray);

        // payItemsArray에서 가격만 빼와서 배열로 만들기
        const payItems = await Foods.findAll({
            where: { foodTypeId: payItemsArray }
        });

        const foodPrices = payItems.map(item => item.foodPrice);

        let sumFoodPrices = 0;
        for (let i = 0; i < foodPrices.length; i++)
        {
            sumFoodPrices = sumFoodPrices + foodPrices[i];   
        }

        // 사용자 db에 저장할 userPoint 값 업데이트 하기
        let updatePoint = loginPoint.userPoint - sumFoodPrices;

        // 포인트 부족하면 pointCharge 페이지로 이동
        if (updatePoint < 0)
        {
            console.log('사용자의 point가 부족합니다!');
            res.render('pointCharge', { loginPoint, message: '포인트가 부족하여 결제할 수 없습니다!!'});
        }
        else
        {
            console.log('구매하기 user point 업데이트 완료!');

            await Users.update(
                { userPoint: updatePoint },
                { where: { userName: loginUser } }
            );

            res.render('payDone', { foodPrices, sumFoodPrices, updatePoint });
        }
    }
    catch (err)
    {
        console.error('Error: ', err);
    }

});

// signUp 페이지
app.get('/signUp', (req, res) => {
    res.render("signUp");
});

// user 추가하기
app.post('/signUp', async(req, res) => {
    await Users.create({
        userName: req.body.inputName,
        userPhone: req.body.inputPhone,
        userAddress: req.body.inputAddress,
        userPoint: 0,
    }).then(result => {
        console.log('Success Add UserData\n');
        res.redirect('/signUpDone');
    }).catch(err => {
        console.error('Failed Add UserData:', err);
        res.render('/500.html');
    })
});

// signUpDone 페이지
app.get('/signUpDone', (req, res) => {
    res.render("signUpDone.html");
});

// login 페이지
app.get('/login', (req, res) => {
    res.render("login.html");
});

// login 구현
app.post('/login', (req, res) => {
    const { inputName, inputPhone } = req.body;

    // db에서 찾기
    Users.findOne ({
        where: {userName: inputName},
    }).then(function(info) {
        if (info == null || info.dataValues.userPhone != inputPhone)
        {
            // let responseData = {'result': 'no', 'flag': req.session.login};
            console.log('Failed Login');
            res.render('login.html', {errorMsg: '다시 시도하세요'});
        }
        else
        {
            req.session.login = true;
            req.session.idx = info.dataValues.userName;
            // let responseData = {'result': 'ok', 'session': req.session.login};
            req.session.username = info.dataValues.userName;
            console.log(info.dataValues.userName + 'login success\n');
            res.redirect('/');
        }
    }).catch(error => {
        console.error('Login Error', error);
        res.redirect('/login');
    });
})

// logout 페이지
app.get('/logout', (req, res) => {
    req.session.login = false;
    req.session.idx = -1;
    console.log('success logout!!');
    res.redirect('/');
});

// 3000포트로 open server
app.listen(3000, (req, res) =>{
    console.log('Server is running on 3000');
});
