'use strict';

const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', data => {
            cb(data);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne('burgers', cols, vals, function(data) {
            cb(data);
        });
    },
    updateOne: function(condition, cb){
        orm.updateOne('burgers',{devoured: true}, condition, function(data){
            cb(data);
        });
        
    }
};

module.exports = burger;