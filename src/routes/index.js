const express = require("express");
const router = express.Router();

const elevonController = require("../controllers/elevon.controller");
const procaveController = require("../controllers/procave.controller");
const procaveOldController = require("../controllers/procaveOld.controller");

let routes = (app) => {
  app.use(express.json());

  router.post("/elevon/rd", elevonController.insertConversionRD);
  router.post("/procave/rdstation", procaveController.insertConversionRD);
  router.post("/procave/rdold", procaveOldController.insertConversionRD);

  app.use("/api", router);
};

module.exports = routes;