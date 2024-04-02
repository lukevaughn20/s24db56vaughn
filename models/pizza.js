const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
    pizza_type: String,
    toppings: String,
    price: Number
})
module.exports = mongoose.model("Pizza", pizzaSchema)