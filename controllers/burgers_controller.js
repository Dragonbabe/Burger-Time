const express = require('express');

const burger = require('../models/burger');

let router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        const obj = {
            burger: data
        };
        console.log(obj);
        res.render('index', obj)
    });
});

// router.post('/burger/create', (req, res) => {
//     burger.insertOne(req.body.burger_name, (result)=> {
//     res.json()
//     })
// })