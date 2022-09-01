const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

router.get('/order/:suite', (req, res, next) => {
    const suite = req.params.suite
    Order.getOrder(suite,(err, order) => {
        if(err) throw err;
        if(!order){
            return res.json({success: false, msg: "Order not found!"});
        }else{
            res.json(order).data;
        }
        
    
    })
});

router.post('/new', (req, res, next) => {
    let newOrder = new Order({
        suiteNumber: req.body.suiteNumber,
        item: req.body.item,
        itemqty: req.body.itemqty,
        itemprice: req.body.itemprice
    })

    Order.addOrder(newOrder, (err, order) => {
        if(err){
            res.json({
                success: false, 
                msg: "Failed to add a new Order!"
            });
        }
        else{
                res.json({
                    success: true,
                    msg: "New Order added!"
            });
        }
    })
});

module.exports = router;