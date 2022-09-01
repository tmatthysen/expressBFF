const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const QTY = require('../models/qty');

router.get('/qty/:category', (req, res, next) => {
    const drinkCat = req.params.category
    QTY.getQTY(drinkCat,(err, qty) => {
        if(err) throw err;
        if(!qty){
            return res.json({success: false, msg: "QTY not found!"});
        }else{
            res.json(qty).data;
        }
        
    
    })
});

router.post('/add', (req, res, next) => {
    let newQTY = new QTY({
        category: req.body.category,
        option: req.body.option
    })

    QTY.addQTY(newQTY, (err, qty) => {
        if(err){
            res.json({
                success: false, 
                msg: "Failed to add a new qty!"
            });
        }
        else{
                res.json({
                    success: true,
                    msg: "New QTY added!"
            });
        }
    })
});

module.exports = router;