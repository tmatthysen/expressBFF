const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Drink = require('../models/drinks');

router.get('/drinks/:category', (req, res, next) => {
    const drinkCat = req.params.category

    if(drinkCat === 'All')
    {
        Drink.getAllDrink((err, drink) => {
            if(err) throw err;
            if(!drink){
                return res.json({success: false, msg: "Drinks not found!"});
            }else{
                res.json(drink).data;
            }
    
            
        })
    }else{
        Drink.getDrink(drinkCat,(err, drink) => {
            if(err) throw err;
            if(!drink){
                return res.json({success: false, msg: "Drinks not found!"});
            }else{
                res.json(drink).data;
            }
            
        
        })
    }
});

router.post('/add', (req, res, next) => {
    let newDrink = new Drink({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
    })

    Drink.addDrink(newDrink, (err, drink) => {
        if(err){
            res.json({
                success: false, 
                msg: "Failed to add a new drink!"
            });
        }
        else{
                res.json({
                    success: true,
                    msg: "New Drink added!"
            });
        }
    })
});

module.exports = router;