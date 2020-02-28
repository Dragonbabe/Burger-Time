const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb) {
        const queryString = 'SELECT * FROM ?';
        connection.query(queryString, [tableName], function(
            err,
            data
        ) {
            if (err) throw err;
            console.log(data);
            cb(data)
        });
    },
    insertOne: function(tableName, rowData, cb){
        const queryString = 'INSERT INTO ? SET ?';
        connection.query(queryString, [tableName, rowData], function(
            err,
            data
        ){
            if (err) throw err;
            console.log(data);
            cb(data)
        });
    },
    updateOne: function(tableName, rowData, condition, cb){
        const queryString = 'UPDATE ? SET ? WHERE ?';
        connection.query(queryString, [tableName, rowData, condition], function(
            err,
            data
        ){
            if (err) throw err;
            console.log(data)
            cb(data)
        });
    }
};


module.exports = orm;