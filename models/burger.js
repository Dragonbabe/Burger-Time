'use strict';

const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', data => {
            cb(data);
        });
    },
    insertOne: function(rowData, cb){
        orm.insertOne('burgers', rowData, cb, function(data) {
            cb(data);
        });
    },
    updateOne: function(condition, cb){
        orm.updateOne('burgers',{devoured: true}, condition, cb, function(data){
            cb(data);
        });
        
    }
};

module.exports = burger;