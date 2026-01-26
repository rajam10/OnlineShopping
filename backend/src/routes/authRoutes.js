const express = require('express');
const controller = require('../controllers/authController');
const { createUserSchema } = require('../middleware/validateSchema');

const router = express.Router();

router.post('/signup', async (req, res, next) => {
  try {
    console.log(req.body);
    await createUserSchema.validateAsync(req.body);
    controller.createUser(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    console.log(req.body);
    controller.loginUser(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/verify-email', (req, res) => {
  try {
  controller.verifyEmail(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

exports.authRoutes = router;