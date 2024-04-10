var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('vegetable', { title: 'Search Result vegetable' });
  });
   
  module.exports = router;
  var express = require('express');
  const vegetable_controlers= require('../controllers/vegetable');
  var router = express.Router();
  /* GET vegetables */
  router.get('/', vegetable_controlers.vegetable_view_all_Page);
  router.get('/detail', vegetable_controlers.vegetable_view_one_Page);
  router.get('/create', vegetable_controlers.vegetable_create_Page);
  router.get('/update', vegetable_controlers.vegetable_update_Page);
  router.get('/delete', vegetable_controlers.vegetable_delete_Page);
  module.exports = router;