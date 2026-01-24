const pool = require('../config/db');

exports.createUser = async (data) => {
  const [result] = await pool.execute(
    'INSERT INTO users (name, email, age, phone_no, role, is_active, password_hash) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [data.name, data.email, data.age, data.phone_no, data.role, data.is_active, data.password]
  );
  return result.insertId;
};

exports.loginUser = async (data) =>{
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [data.email]
  );
  return rows[0];
}