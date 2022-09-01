const mongoose = require('mongoose');
const config = require('../config/db')

const DrinkSchema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    price: {
        type: Number
    }
})

const Drink = module.exports = mongoose.model('Drink', DrinkSchema);

module.exports.getDrink = function(drinkCat,callback){
    Drink.find({category: drinkCat},callback);
}

module.exports.getAllDrink = function(callback){
    Drink.find(callback);
}

module.exports.addDrink = function(newDrink, callback){
    newDrink.save(callback);
}