// routes/resource.js

var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var vegetable_controller = require('../controllers/vegetable');

/// API ROUTE ///
// GET resources base.x 
router.get('/', api_controller.api);

/// VEGETABLE ROUTES ///
// POST request for creating a Vegetable.
router.post('/vegetable', vegetable_controller.vegetable_create_post);

// DELETE request to delete Vegetable.
router.delete('/vegetable/:id', vegetable_controller.vegetable_delete);

// PUT request to update Vegetable.
router.put('/vegetable/:id', vegetable_controller.vegetable_update_put);

// GET request for one Vegetable.
router.get('/vegetable/:id', vegetable_controller.vegetable_detail);

// GET request for list of all Vegetable items.
router.get('/vegetable', vegetable_controller.vegetable_list);

module.exports = router;
