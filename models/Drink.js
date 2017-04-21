"use strict";
var mongoose = require("mongoose");
var drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mainIngredient: String
});
module.exports = mongoose.model('Drink', drinkSchema);
//# sourceMappingURL=Drink.js.map