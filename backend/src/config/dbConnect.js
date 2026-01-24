const pool = require('./db');

const connectDB = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL connected');
    connection.release();
  } catch (error) {
    console.error('❌ MySQL connection failed', error);
  }
};

module.exports = connectDB;
