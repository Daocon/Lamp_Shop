const { LampModel } = require("../../api/models/lamps")

// get list of lamps
exports.getListLamp = async (req, res, next) => {
  try {
    let lampList = await LampModel.find();
    if (lampList.length > 0) {
      res.json({
        status: 200,
        message: "Lamp list retrieved successfully",
        data: lampList,
      });
    } else {
      res.json({
        status: 404,
        message: "No lamps found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// add new lamp
exports.addLamp = async (req, res, next) => {
  try {
    const data = req.body;
    let obj = new LampModel({
      name: data.name,
      id_category: data.id_category,
      price: data.price,
      rate: data.rate,
      description: data.description,
      image: data.image,
    });
    let result = await obj.save();
    if (result) {
      res.json({
        status: 200,
        message: "Lamp added successfully",
        data: result,
      });
    } else {
      res.json({
        status: 404,
        message: "Add lamp failed",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// update lamp
exports.updateLamp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedLamp = await LampModel.findById(id);
    let result = null;
    if (updatedLamp) {
      (updatedLamp.name = data.name ?? updatedLamp.name),
      (updatedLamp.id_category = data.type ?? updatedLamp.id_category),
      (updatedLamp.price = data.price ?? updatedLamp.price),
      (updatedLamp.rate = data.rate ?? updatedLamp.rate),
      (updatedLamp.description = data.description ?? updatedLamp.description),
      (updatedLamp.image = data.image ?? updatedLamp.image),
      (result = await updatedLamp.save());
    }
    if (result) {
      res.json({
        status: 200,
        message: "Lamp updated successfully",
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

//delete lamp
exports.deleteLamp = async (req, res, next) => {
  try {
    const lampId = req.params.id;
    let deletedLamp = await LampModel.findByIdAndDelete(lampId);
    if (deletedLamp) {
      res.json({
        status: 200,
        message: "Lamp deleted successfully",
        data: deletedLamp,
      });
    } else {
      res.json({
        status: 404,
        message: "Lamp not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// get lamp by id
exports.getLampById = async (req, res, next) => {
  try {
    const lampId = req.params.id;
    let lamp = await LampModel.findById(lampId);
    if (lamp) {
      res.json({
        status: 200,
        message: "Lamp retrieved successfully",
        data: lamp,
      });
    } else {
      res.json({
        status: 404,
        message: "Lamp not found",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
};
