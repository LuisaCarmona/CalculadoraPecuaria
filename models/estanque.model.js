// se crea esquema en mongo para los estanques

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstanqueSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
  fecha_inicial: { type: String, required: true, max: 60 },
  costo_peces: { type: String, required: false, max: 60 },
  fecha_final: { type: String, required: false, max: 60 },
  venta_peces: { type: String, required: false, max: 60 },
});

module.exports = mongoose.model("estanque", EstanqueSchema);
