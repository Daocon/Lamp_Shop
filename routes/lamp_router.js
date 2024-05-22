var express = require("express");
var router = express.Router();
const LampCtl = require("../api/controllers/lamp_controller")

//lampRouter

router.get("/getListLamp", LampCtl.getListLamp);
router.post("/addLamp", LampCtl.addLamp);
router.delete("/deleteLamp/:id", LampCtl.deleteLamp);
router.put("/updateLamp/:id", LampCtl.updateLamp);
router.get("/getLamp/:id", LampCtl.getLampById);

module.exports = router;
