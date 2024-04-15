const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
    pizza_type:{
        type: String,
        minLength: 5
    },
    toppings: String,
    price:{ 
        type: Number,
        min: 6.99,
        max: 35.99
    }

})
module.exports = mongoose.model("Pizza", pizzaSchema)