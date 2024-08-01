const mysql = require('mysql');
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345',
  database:'nodejs_bd'
});

db.connect(function(err){
  if(err) throw err;
  console.log('Base de datos conectada')
});

module.exports = db;