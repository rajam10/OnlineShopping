const pool = require('../config/db');

exports.addCategory = async (data) => {
    const { name, parent_id } = data;
    
    if (!name) {
        throw new Error('Category name is required');
    }
    
    const [result] = await pool.execute(
        'INSERT INTO categories (name, parent_id) VALUES (?, ?)',
        [name, parent_id || null]
    );
    
    if (!result.affectedRows) {
        throw new Error('Failed to add category');
    }
    
    return { id: result.insertId, name, parent_id: parent_id || null };
};

exports.updateCategory = async (id, data) => {
    const { name, parent_id } = data;
    if (!id || !name) {
        throw new Error('Category id and name are required');
    }

    const [result] = await pool.execute(
        'UPDATE categories SET name = ?, parent_id = ? WHERE id = ?',
        [name, parent_id || null, id]
    );

    if (!result.affectedRows) {
        throw new Error('Failed to update category');
    }

    return { id, name, parent_id: parent_id || null };
};

exports.deleteCategory = async (id) => {
    if (!id) {
        throw new Error('Category ID is required for deletion');
    }
    const [result] = await pool.execute(
        'DELETE FROM categories WHERE id = ?',
        [id]
    );

    if (!result.affectedRows) {
        throw new Error('Failed to delete category');
    }

    return { id, message: 'Category deleted successfully' };
};

exports.getAllCategories = async () => {
    const [rows] = await pool.execute('SELECT * FROM categories ORDER BY name');
    return rows;
};

exports.getCategoryById = async (id) => {
    if (!id) {
        throw new Error('Category ID is required');
    }
    
    const [rows] = await pool.execute('SELECT * FROM categories WHERE id = ?', [id]);
    
    if (rows.length === 0) {
        throw new Error('Category not found');
    }
    
    return rows[0];
};