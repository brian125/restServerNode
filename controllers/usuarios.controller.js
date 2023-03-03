const { response } = require("express");

const getUsuarios = (req, res = response) => {
  const {q} = req.query;

  res.json({
    msg: "get API - controlador",
    q
  });
};

const postUsuarios = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};

const putUsuarios = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controlador",
    id,
  });
};

const patchUsuarios = (req, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};

const deleteUsuarios = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  patchUsuarios,
  deleteUsuarios,
};
