const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', data => {
            cb(data);
        });
    },
    insertOne: function(rowData, cb){
        orm.insertOne('burgers', rowData, cb)
    },
    updateOne: function(condition, cb){
        orm.updateOne('burgers',{devoured: true}, condition, cb)
        
    }
};

module.exports = burger;