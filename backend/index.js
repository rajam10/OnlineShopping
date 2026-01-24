const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/dbConnect');
const { authRoutes } = require('./src/routes/authRoutes');
const { healthCheckRoutes } = require('./src/routes/healthCheck');

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/health', healthCheckRoutes);

connectDB().then(() => {
  console.log('Database connection established');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch((err) => {
  console.error('Database connection error:', err);
});