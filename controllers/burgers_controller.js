'use strict';

const express = require('express');

const burger = require('../models/burger');

let router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll(function(data) {
        const obj = {
            burgers: data
        };
        console.log(obj);
        res.render('index', obj)
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(
        ["burger_name"],
        [req.body.burger_name],
        function(result){
    res.json({ id: result.insertid})
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const condition = 'id =' + req.params.id;

    burger.updateOne({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if (result.changedRows == 0 ) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }

    );

});





module.exports = router;