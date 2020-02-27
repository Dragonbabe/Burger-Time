const connection = require('./connection');

function selectAll() {
    connection.query('SELECT * FROM burgers',
    function (err, res) {
        if (err) throw err;
        console.log(res)
    }
    )
};
function insertOne(){
    connection.query('SELECT * FROM burgers',
    function (err, res) {
        if (err) throw err;
        console.log()
    })
};
function updateOne(){
    connection.query('SELECT * FRom burgers', 
    function (err, res) {
        if (err) throw err;
        console.log(res)
    })
};
module.exports.connection;