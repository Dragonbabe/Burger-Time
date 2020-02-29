'use strict';

const connection = require('./connection');

function printQuestionMarks(num) {
    const arr = [];
    for (let i = 0; i < num; ++i){
        arr.push('?');
    }
    return arr.toString();
}
function objToSql(ob){
    const arr = [];
    for (const key in ob){
        const value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === 'string' && value.indexOf('') >=0){
                value = "'" + value + "'"
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}

const orm = {
    selectAll: function(tableName, cb) {
        let queryString = `SELECT * FROM ${tableName} ;` ;
        connection.query(queryString, function(
            err,
            data
        ) {
            if (err) throw err;
            console.log(data);
            cb(data)
        });
    },

    insertOne: function(tableName, rowData, cb){
        let queryString = 'INSERT INTO ? SET ?';

        queryString += '(';
        queryString += close.toString();
        queryString += ')';
        queryString += 'VALUES (';
        queryString += printQuestionMarks(vals.length);
        queryString += ')'

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
        let queryString = 'UPDATE ? SET ? WHERE ?';

        queryString += 'SET ';
        queryString += objToSql(rowData);
        queryString += 'WHERE ';
        queryString += condition;

        connection.query(queryString,(err, data) =>
            
        {
            if (err) throw err;
            console.log(data)
            cb(data)
        });
    }
};


module.exports = orm;