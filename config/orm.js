const connection = require('./connection');

const orm = {
    selectAll: function(burgers, devourable) {
        const queryString = 'SELECT * FROM ?? WHERE ??? = ?';
        connection.query(queryString, [burgers, devourable], function(
            err,
            data
        ) {
            if (err) throw err;
            console.log(data);
        });
    },
    insertOne: function(addBurger, devourable){
        const queryString = 'INSERT INTO burgers VALUES ?';
        connection.query(queryString, [addBurger, devourable], function(
            err,
            data
        ){
            if (err) throw err;
            console.log(data);
        });
    },
    updateOne: function(updateBurger, devoured){
        const queryString = 'INSERT INTO burgers VALUES ?';
        connection.query(queryString, [updateBurger, devoured], function(
            err,
            data
        ){
            if (err) throw err;
            console.log(data)
        });
    }
};


module.exports.orm;