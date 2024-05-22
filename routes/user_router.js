var express = require("express");
var router = express.Router();
const UserCtl = require("../api/controllers/user_controller")

//userRouter

router.get("/getListUser", UserCtl.getListUser);
router.delete("/deleteUser/:id", UserCtl.deleteUser);
router.put("/updateUser/:id", UserCtl.updateUser);
router.get("/getUser/:id", UserCtl.getUserById);
router.post("/signin", UserCtl.signIn);
router.post("/signup", UserCtl.register)


module.exports = router;
