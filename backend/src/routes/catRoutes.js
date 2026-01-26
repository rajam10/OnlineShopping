const express = require('express');
const controller = require('../controllers/catController');
//const { createUserSchema } = require('../middleware/validateSchema');
const router = express.Router();

router.post('/add-category', async (req, res, next) => {
  try {
    console.log(req.body);
    //await createUserSchema.validateAsync(req.body);
    controller.addCategory(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});