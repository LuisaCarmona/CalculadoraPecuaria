const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// esquema para los productores
const ProductorSchema = new Schema({
  nombres: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("productores", ProductorSchema);
