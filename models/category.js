const mongoose = require('mongoose');
const config = require('../config/db')

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    },
    active: {
        type: Boolean
    }
});

const Category = module.exports = mongoose.model('Category', CategorySchema);

module.exports.getCategory = function(callback){
    Category.find(callback);
}


module.exports.addCategory = function(newCategory, callback){
    newCategory.save(callback);
}