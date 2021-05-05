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
  var sql = "INSERT INTO CLUB VALUES ?";
  var values = [
    ['1','WLUG','HASABE Y','80'],
    ['2','ACSES','SAWAJI S','80'],
    ['3','SAIT','BISEN B','80'],
    ['4','PACE','DESHMUKH S','80'],
    
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});