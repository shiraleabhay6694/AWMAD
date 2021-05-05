var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abhay123",
  database: "AWMAD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE CLUB (club_id int,club_name varchar(255), club_head varchar(255) ,club_count int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});