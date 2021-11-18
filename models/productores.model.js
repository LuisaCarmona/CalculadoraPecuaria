const mongoose = require("mongoose");
const schema = mongoose.Schema;

// esquema para los productores
const productorSchema = new schema({
  documento: { type: String, required: true, max: 20 },
  nombres: { type: String, required: true, max: 100 },
  apellidos: { type: String, required: true, max: 128 },
  celular: { type: String, required: false, max: 30 },
  email: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 128 },
});

module.exports = mongoose.model("productores", productorSchema);
