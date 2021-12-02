// se crea el controlador para los estanques

const Estanque = require("../models/estanque.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let estanque = new Estanque({
    nombre: req.body.nombre,
    fecha_inicial: req.body.fecha_inicial,
    costo_peces: req.body.costo_peces,
    fecha_final: req.body.fecha_final,
    venta_peces: req.body.venta_peces,
  });

  estanque.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = "Se guardó correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Estanque.find(function (err, estanques) {
    res.json(estanques);
  });
};

exports.findOne = function (req, res) {
  Estanque.findOne({ _id: req.params.id }, function (err, estanque) {
    res.json(estanque);
  });
};

exports.update = function (req, res) {
  let estanque = {
    nombre: req.body.nombre,
    fecha_inicial: req.body.fecha_inicial,
    costo_peces: req.body.costo_peces,
    fecha_final: req.body.fecha_final,
    venta_peces: req.body.venta_peces,
  };

  Estanque.findByIdAndUpdate(req.params.id, { $set: estanque }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar ");
      res.json(response);
      return;
    }

    (response.exito = true), (response.msg = " modifico correctamente");
    res.json(response);
  });
};

exports.remove = function (req, res) {
  Estanque.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el estanque");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El estanque fué eliminado correctamente");
    res.json(response);
  });
};
