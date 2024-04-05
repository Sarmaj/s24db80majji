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
    // Handle vegetable create on POST.
exports.vegetable_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vegetable();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"vegetable_type":"goat", "cost":12, "size":"large"}
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
// for a specific vegetable.
// exports.vegetable_detail = async function(req, res) {
// console.log("detail" + req.params.id)
// try {
// result = await vegetable.findById( req.params.id)
// res.send(result)
// } catch (error) {
// res.status(500)
// res.send(`{"error": document for id ${req.params.id} not found`);
// }
// };
//
exports.vegetable_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await vegetable.findById( req.params.id)
    // Do updates of properties
    if(req.body.vegetable_type)
    toUpdate.vegetable_type = req.body.vegetable_type;
    if(req.body.cost) toUpdate.cost = req.body.cost;
    if(req.body.size) toUpdate.size = req.body.size;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
    