var express = require('express');
var router = express.Router();
const controller = require('../controller');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/login', controller.login.renderLoginPage);




module.exports = router;
