const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

require('dotenv').config();

async function migrate() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
  });

  const migrationsDir = path.join(__dirname, '../db/migrations');
  const files = fs.readdirSync(migrationsDir).sort();

  await connection.query(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      filename VARCHAR(255) UNIQUE,
      executed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const [rows] = await connection.query(
    'SELECT filename FROM migrations'
  );
  const executed = rows.map(r => r.filename);

  for (const file of files) {
    if (executed.includes(file)) {
      console.log(`⏭ Skipping ${file}`);
      continue;
    }

    const sql = fs.readFileSync(
      path.join(migrationsDir, file),
      'utf8'
    );

    console.log(`🚀 Running ${file}`);
    await connection.query(sql);
    await connection.query(
      'INSERT INTO migrations (filename) VALUES (?)',
      [file]
    );
  }

  console.log('✅ All migrations applied');
  await connection.end();
}

migrate().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
