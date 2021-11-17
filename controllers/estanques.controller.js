const { response } = require("express");
const Estanque = require("../models/estanques.model");

let responsive = {
    msg: "",
    exito: false
}
exports.create = function(req, res){
    let estanque = new Estanque({
        /*nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,*/
    })
    estanque.save(function(err){
        if(err){
            console.log = false;
            response.exito = false,
            response.msg = "Error al guardar el estanque",
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El estanque se guardo correctamente"
        res.json(response)
    })
}