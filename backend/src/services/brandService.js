const brandRepo = require('../repository/brandRepo');

exports.addBrand = async (data) => {
    try {
        if( !data || !data.name ) {
            throw new Error('Invalid brand data or name is required');
        }
        const brand = await brandRepo.addBrand(data);
        return brand;
    } catch (error) {
        throw error;
    }
};

exports.getAllBrands = async () => {
    try {
        const brands = await brandRepo.getAllBrands();
        return brands;
    } catch (error) {
        throw error;
    }
};

exports.updateBrand = async (id, data) => {
    try {
        if( !id || !data ) {
            throw new Error('Invalid brand data or id is required');
        }
        const brand = await brandRepo.updateBrand(id, data);
        return brand;
    } catch (error) {
        throw error;
    }
};
