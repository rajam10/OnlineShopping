const pool = require('../config/db');

exports.addBrand = async (data) => {
    try {
        const { name, slug } = data;
        if (!name) {
            throw new Error('Brand name is required');
        }

        const [result] = await pool.execute(
            'INSERT INTO brands (name, slug) VALUES (?, ?)',
            [name, slug || null]
        );
        if (!result.affectedRows) {
            throw new Error('Failed to add brand');
        }
        return { id: result.insertId, name, slug: slug || null };
    } catch (error) {
        throw error;
    }
};


exports.updateBrand = async (id, data) => {
    try {
        const { name, slug } = data;
        if (!id || !name) {
            throw new Error('Brand id and name are required');
        }
        const [result] = await pool.execute(
            'UPDATE brands SET name = ?, slug = ? WHERE id = ?',
            [name, slug || null, id]
        );
        if (!result.affectedRows) {
            throw new Error('Failed to update brand');
        }
        return { id, name, slug: slug || null };
    } catch (error) {
        throw error;
    }
};

exports.getAllBrands = async () => {
    const [rows] = await pool.execute('SELECT * FROM brands ORDER BY name');
    return rows;
};