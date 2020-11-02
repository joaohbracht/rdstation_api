const express = require("express");
const router = express.Router();

const rdstationController = require("../controllers/rdstation.controller");

let routes = (app) => {
  app.use(express.json());

  router.post("/elevon/rd", rdstationController.insertConversion);

  app.use("/api", router);
};

module.exports = routes;