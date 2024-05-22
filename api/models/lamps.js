const db = require("../../config/db")
const { Schema } = require("mongoose");
const Lamp_Schema = new db.mongoose.Schema(
  {
    name: { type: String, maxLength: 255 },
    image: { type: String},
    id_category: { type: Schema.Types.ObjectId, ref: "categories"},
    price: {type: String},
    rate: {type: String},
    description: {type: String, maxLength: 255},
  },
  { 
    timestamps: true,
  }
);

const LampModel = db.mongoose.model("LampModel", Lamp_Schema, "lamps");
module.exports = { LampModel };
