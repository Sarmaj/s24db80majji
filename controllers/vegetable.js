// controllers/vegetablesController.js

var vegetable = require('../models/vegetable');

// List all vegetables
exports.vegetable_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Vegetable list');
};

// Get details of a specific vegetable
exports.vegetable_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Vegetable detail: ' + req.params.id);
};

// Create a new vegetable
exports.vegetable_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Vegetable create POST');
};

// Delete a vegetable
exports.vegetable_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Vegetable delete DELETE ' + req.params.id);
};

// Update a vegetable
exports.vegetable_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Vegetable update PUT' + req.params.id);
};


exports.vegetable_list = async function(req, res) {
    try{
    theVegetable = await vegetable.find();
    res.send(theVegetable);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };


// VIEWS
// Handle a show all view
exports.vegetable_view_all_Page = async function(req, res) {
    try{
    thevegetable = await vegetable.find();
    res.render('vegetable', { title: 'vegetable Search Results', results: thevegetable });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle Costume create on POST.
exports.vegetable_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vegetable();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.vegetable_type = req.body.vegetable_type;
    document.size = req.body.size;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
    