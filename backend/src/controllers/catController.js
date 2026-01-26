const serviceCat =  require('../services/categoryService');

exports.addCategory = async (req, res) => {
  try {
    const categoryId = await serviceCat.addCategory(req.body);
    res.status(200).json({ message: "Category added successfully", categoryId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};