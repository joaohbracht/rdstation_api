const express = require("express");
const router = express.Router();

const rdstationOldController = require("../controllers/rdstationOld.controller");

let routes = (app) => {
  app.use(express.json());

  router.post("/example/rd", rdstationOldController.insertConversionRD);

  app.use("/api", router);
};

module.exports = routes;