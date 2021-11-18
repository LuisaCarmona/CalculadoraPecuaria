// se crea controlador para los productores o usuarios

const productorModel = require("../models/productores.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

let response = {
  message: "",
  exito: false,
};

// método para crear un productor nuevo
exports.create = function (req, res) {
  let productor = new productorModel({
    documento: req.body.documento,
    nombres: req.body.nombres,
    apellidos: req.body.apellidos,
    celular: req.body.celular,
    email: req.body.email,
    password: req.body.password,
  });

  productor.save(function (err) {
    if (err) {
      console.log = false;
      response.exito = false;
      response.message = "Error al registrar el productor";
      res.json(response);
      return;
    }

    response.exito = true;
    response.message = "productor registrado correctamente";
    res.json(response);
  });
};

// método para el login del usuario
exports.login = function (req, res, next) {
  let hashedpass = crypto
    .createHash("sha512")
    .update(req.body.password)
    .digest("hex");
  productorModel.findOne(
    {
      usuario: req.body.email,
      password: hashedpass,
    },
    function (err, usuario) {
      let response = {
        token: null,
      };
      if (usuario !== null) {
        response.token = jwt.sign(
          {
            id: usuario._id,
            usuario: usuario.usuario,
          },
          "__secret__"
        );
      }
      res.json(response);
    }
  );
};

// método para hacer lista de todos los productores
exports.list = function (req, res) {
  productorModel.find(function (err, productores) {
    res.json(productores);
  });
};

// método para buscar productor por id
exports.findById = function (req, res) {
  productorModel.findOne({ _id: req.params.id }, function (err, productor) {
    res.json(productor);
  });
};
