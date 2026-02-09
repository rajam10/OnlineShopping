const catRepo = require('../repository/catRepo');

// Service layer handles business logic
exports.addCategory = async (data) => {
    // Validate input data
    if (!data || !data.name) {
        throw new Error('Invalid category data: name is required');
    }
    
    // Trim and validate name
    const name = data.name.trim();
    if (name.length < 2) {
        throw new Error('Category name must be at least 2 characters long');
    }
    
    // Call repository to persist data
    const category = await catRepo.addCategory({ name, parent_id: data.parent_id });
    return category;
};

exports.updateCategory = async (id, data) => {
    // Validate input data
    if (!data || !data.name) {
        throw new Error('Invalid category data: id and name are required');
    }

    // Call repository to update data
    const category = await catRepo.updateCategory(id, data);
    return category;
};

exports.deleteCategory = async (id) => {
    if (!id) {
        throw new Error('Category ID is required for deletion');
    }
    const result = await catRepo.deleteCategory(id);
    return result;
};

exports.getAllCategories = async () => {
    // Call repository to fetch data
    const categories = await catRepo.getAllCategories();
    return categories;
};

exports.getCategoryById = async (id) => {
    if (!id) {
        throw new Error('Category ID is required');
    }
    
    const category = await catRepo.getCategoryById(id);
    return category;
};