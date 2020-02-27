const mysql = require('mysql');

const app = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SoccerTime253!"
});

app.connect(function(err) {
    if (err) throw err;
    console.log("Connected! Here is a Chai latte!")
});

module.exports = connection;