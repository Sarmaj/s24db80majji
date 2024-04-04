const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
vegetable_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("vegetable",vegetableSchema)