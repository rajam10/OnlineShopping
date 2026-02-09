const express = require('express');
const brandController = require('../controllers/brandcontroller');

const router = express.Router();

router.post('/add-brand', async (req, res, next) => {
    try {
        await brandController.addBrand(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/all-brands', async (req, res, next) => {
    try {
        await brandController.getAllBrands(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.put('/update-brand/:id', async (req, res, next) => {
    try {
        await brandController.updateBrand(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

exports.brandRoutes = router;