const brandService = require('../services/brandService');

exports.addBrand = async (req, res) => {
    try {
        const brand = await brandService.addBrand(req.body);
        res.status(201).json({
            message: 'Brand added successfully',
            brand
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllBrands = async (req, res) => {
    try {
        const brands = await brandService.getAllBrands();
        res.status(200).json({
            message: 'Brands retrieved successfully',
            brands
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBrand = async (req, res) => {
    try {
        const id = req.params.id;
        const brand = await brandService.updateBrand(id, req.body);
        res.status(200).json({
            message: 'Brand updated successfully',
            brand
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};