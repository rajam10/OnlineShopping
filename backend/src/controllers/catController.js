const catService = require('../services/catService');

exports.addCategory = async (req, res) => {
    try {
        const category = await catService.addCategory(req.body);
        res.status(201).json({
            message: 'Category added successfully',
            category
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await catService.updateCategory(id, req.body);
        res.status(200).json({
            message: 'Category updated successfully',
            category
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const result = await catService.deleteCategory(categoryId);
        res.status(200).json({
            message: 'Category deleted successfully',
            result
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await catService.getAllCategories();
        res.status(200).json({
            message: 'Categories retrieved successfully',
            categories
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await catService.getCategoryById(req.params.id);
        res.status(200).json({
            message: 'Category retrieved successfully',
            category
        });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};