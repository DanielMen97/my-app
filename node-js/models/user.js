const mysql = require('../config/config');
const User = {};
User.create = (user, result) => {
  const sql = `
  INSERT INTO users(
    email,
    name,
    lastname,
    phone,
    image,
    password,
    create_at,
    update_at
  )
  VALUES(?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(
    sql,
    [
      user.email,
      user.name,
      user.email,
      user.phone,
      user.image,
      user.password,
      new Date(),
      new Date()
    ],
    (err, res) => {
      if(err) {
        console.log('error: ', err);
        result(err, null);
      }
      else{
        console.log('Id del nuevo usuario: ', res.insertId);
        result(null, res.insertId)
      }
    }
  )
}