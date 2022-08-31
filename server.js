const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query('SELECT * FROM r1.employee', function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result) );
    });
  });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });