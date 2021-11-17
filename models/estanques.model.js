const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EstanquesSchema = new Schema({
    /*nombre: {type:String, required: true, max: 60},
    apellido_p: {type:String, required: true, max: 40},
    apellido_m: {type:String, required: true, max: 40},
    telefono: {type:String, required: true, max: 15},
    mail: {type:String, required: false, max: 80},
    direccion: {type:String, required: true, max: 60},*/
})

module.esports = mongoose.model("Estanques", EstanquesSchema);