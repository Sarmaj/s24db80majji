const mongoose = require("mongoose")
const vegetableSchema = mongoose.Schema({
vegetable_type: String,
size:  {
    type: String,
    minlength:[3],
    maxlength: [30]
},
cost:  {
    type: Number,
    min: [0.5],
    max: [100.5],
}
})
module.exports = mongoose.model("vegetable",vegetableSchema)