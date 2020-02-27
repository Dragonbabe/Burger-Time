const connection = require('./connection');

const orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
        const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(
            err,
            data
        ) {
            if (err) throw err;
            console.log(data);
        }
        );
    }
};

module.exports.orm;