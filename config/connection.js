'use strict';
// setup the mysql connection
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "SoccerTime253!",
    database: "burgers_db"

});
//connect
connection.connect(function(err) {
    if (err) {
    console.error('error in the connection, go eat a sandwich and come back', err.stack)
    return;
    }
    console.log(`Connected! With id ${connection.threadId}`);
});
// export connection for the orm!
module.exports = connection;