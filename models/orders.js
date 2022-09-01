const mongoose = require('mongoose');
const config = require('../config/db')

const OrderSchema = mongoose.Schema({
    suiteNumber: {
        type: String
    },
    item: {
        type: String
    },
    itemqty: {
        type: String
    },
    itemprice: {
        type: String
    }
})

const Order = module.exports = mongoose.model('Order', OrderSchema);

module.exports.getOrder = function(suiteNo,callback){
    Order.find({suiteNumber: suiteNo},callback);
}

module.exports.addOrder = function(newOrder, callback){
    newOrder.save(callback);
}