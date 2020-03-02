'use strict';
// setup the mysql connection
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL)
}else {
    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "SoccerTime253!",
        database: "burgers_db"
    
    });
}


//connect
connection.connect();
// export connection for the orm!
module.exports = connection;