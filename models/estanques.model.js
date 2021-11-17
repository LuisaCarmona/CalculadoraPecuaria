const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstanquesSchema = new Schema({
    nombre: {type:String, required: true, max: 60},
    fecha_siembra: {type:String, required: true, max: 40},
    cantidad_siembra: {type:String, required: true, max: 40},
})

module.esports = mongoose.model("Estanques", EstanquesSchema);