const mongoose = require('mongoose');
const config = require('../config/db')

const QTYSchema = mongoose.Schema({
    category: {
        type: String
    },
    option: {
        type: String
    }
})

const QTY = module.exports = mongoose.model('QTY', QTYSchema);

module.exports.getQTY = function(drinkCat,callback){
    QTY.find({category: drinkCat},callback);
}

module.exports.addQTY = function(newQTY, callback){
    newQTY.save(callback);
}