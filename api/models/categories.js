const db = require("../../config/db")
const Category_Schema = new db.mongoose.Schema(
  {
    name: { type: String }
  },
  {
    timestamps: true,
  }
);

const CategoryModel = db.mongoose.model("CategoryModel", Category_Schema, "categories");
module.exports = { CategoryModel };
