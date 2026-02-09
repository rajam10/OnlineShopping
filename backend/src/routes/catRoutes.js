const express = require('express');
const catController = require('../controllers/catController');
//const { validateCategorySchema } = require('../middleware/validateSchema');
const router = express.Router();

// Add a new category
router.post('/add-category', async (req, res, next) => {
    try {
        //await validateCategorySchema.validateAsync(req.body);
        await catController.addCategory(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all categories
router.get('/all-categories', async (req, res, next) => {
    try {
        await catController.getAllCategories(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get category by ID
router.get('/:id', async (req, res, next) => {
    try {
        await catController.getCategoryById(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/update-category/:id', async (req, res, next) => {
  try {
    console.log(req.body);
    //await createUserSchema.validateAsync(req.body);
    await catController.updateCategory(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/delete-category/:id', async (req, res, next) => {
  try {
    console.log(req.body);
    //await createUserSchema.validateAsync(req.body);
    await catController.deleteCategory(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/get-categories', async (req, res, next) => {
  try {
    controller.getAllCategories(req, res);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


exports.catRoutes = router;