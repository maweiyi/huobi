var express = require('express');
var router = express.Router();
const controller = require('../controller');

/* GET home page. */
router.get('/', controller.home.renderHomePage);
router.get('/login', controller.login.renderLoginPage);




module.exports = router;
