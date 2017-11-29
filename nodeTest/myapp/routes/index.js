var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',app:'show',test:'1234567890' });//index调用index模板  接收测试数据
});

module.exports = router;
