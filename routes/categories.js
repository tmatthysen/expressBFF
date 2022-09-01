const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const Category = require('../models/category');

router.get('/category', (req, res, next) => {
    Category.getCategory((err, category) => {
        if(err) throw err;
        if(!category){
            return res.json({success: false, msg: "Categories not found!"});
        }else{
            res.json(category).data;
        }

        
    })
});

router.post('/add', (req, res, next) => {
    let newCategory = new Category({
        name: req.body.name,
        active: req.body.active
    })

    Category.addCategory(newCategory, (err, category) => {
        if(err){
            res.json({
                success: false, 
                msg: "Failed to add a new category!"
            });
        }
        else{
                res.json({
                    success: true,
                    msg: "New Category added!"
            });
        }
    })
});

module.exports = router;