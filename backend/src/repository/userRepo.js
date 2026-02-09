const pool = require('../config/db');

exports.createUser = async (data) => {

  const [existing] = await pool.query(
    "SELECT id FROM users WHERE email = ?",
    [data.email]
  );
  if (existing.length > 0) {
    throw new Error('Email already in use');
  }
  const [result] = await pool.execute(
    'INSERT INTO users (name, email, age, phone_no, role, is_active, password_hash, is_verified) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [data.name, data.email, data.age, data.phone_no, data.role, data.is_active, data.password, 0]
  );
  if (!result.affectedRows) {
    throw new Error('User creation failed');
  }else{
    const [rows] = await pool.execute(
      'insert into user_otps (user_id,otp_hash,purpose,expires_at,is_used) VALUES (?, ?, ?, ?, ?)',
      [result.insertId, data.otp_hash, data.purpose, data.expires_at, false]
    );
    return result;
  }
};

exports.loginUser = async (data) =>{
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [data.email]
  );
  return rows[0];
}

exports.getOtpRecord = async (userId, purpose) => {
  const [rows] = await pool.execute(
    'SELECT * FROM user_otps WHERE user_id = ? AND purpose = ? ORDER BY created_at DESC LIMIT 1',
    [userId, purpose]
  );
  return rows[0];
};

exports.getUserById = async (userId) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [userId]
  );
  return rows[0];
}

exports.markOtpAsUsed = async (userId) => {
  const [result] = await pool.execute(
    'UPDATE user_otps SET is_used = ? WHERE user_id = ?',
    [1, userId]
  );
  const [result1] = await pool.execute(
    'UPDATE users SET is_verified = ? WHERE id = ?',
    [1, userId]
  );
  return result;
};