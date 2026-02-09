const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.post('/add-product', async (req, res, next) => {
    try {
        await productController.addProduct(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/all-products', async (req, res, next) => {
    try {
        await productController.getAllProducts(req, res);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});