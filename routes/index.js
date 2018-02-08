var express = require('express');
var router = express.Router();
const controller = require('../controller');

/* GET home page. */
router.get('/', controller.home.renderHomePage);
router.get('/login', controller.login.renderLoginPage);
router.get('/coin', controller.coin.renderCoinPage);
router.get('/money', controller.money.renderMoneyPage);
module.exports = router;
