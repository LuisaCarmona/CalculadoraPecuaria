// se crea esquema en mongo para los estanques

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstanquesSchema = new Schema({
  nombre: { type: String, required: true, max: 60 },
});

module.esports = mongoose.model("Estanques", EstanquesSchema);
