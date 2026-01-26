const serviceRepo = require('../repository/categoryRepo');

exports.addCategory = async (req, res) => {
  try {
    const categoryId = await serviceRepo.addCategory(req.body);
    res.status(200).json({ message: "Category added successfully", categoryId });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};