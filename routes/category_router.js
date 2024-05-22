var express = require("express");
var router = express.Router();
const CategoryCtl = require("../api/controllers/category_controller")

//categoryRouter

router.get("/getListCategory", CategoryCtl.getListCategory);
router.post("/addCategory", CategoryCtl.addCategory);
router.delete("/deleteCategory/:id", CategoryCtl.deleteCategory);
router.put("/updateCategory/:id", CategoryCtl.updateCategory);

module.exports = router;
