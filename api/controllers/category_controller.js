const { CategoryModel } = require("../models/categories");

// get list of categories
exports.getListCategory = async (req, res, next) => {
  try {
    let categoryList = await CategoryModel.find();
    if (categoryList.length > 0) {
      res.json({
        status: 200,
        message: "Category list retrieved successfully",
        data: categoryList,
      });
    } else {
      res.json({
        status: 404,
        message: "No categories found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// add new category
exports.addCategory = async (req, res, next) => {
  try {
    const data = req.body;
    let obj = new CategoryModel({
      name: data.name,
    });
    let result = await obj.save();
    if (result) {
      res.json({
        status: 200,
        message: "Category added successfully",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Add category failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// update category
exports.updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedCategory = await CategoryModel.findById(id);
    let result = null;
    if (updatedCategory) {
      (updatedCategory.name = data.name ?? updatedCategory.name),
        (result = await updatedCategory.save());
    }
    if (result) {
      res.json({
        status: 200,
        message: "Category updated successfully",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Update failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// delete category
exports.deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    let deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    if (deletedCategory) {
      res.json({
        status: 200,
        message: "Category deleted successfully",
        data: deletedCategory,
      });
    } else {
      res.json({
        status: 404,
        message: "Category not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
