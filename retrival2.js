var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhay123",
  database: "AWMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM CLUB where club_id='2'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});