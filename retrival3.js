var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhay123",
  database: "AWMAD"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM CLUB order by club_name", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});