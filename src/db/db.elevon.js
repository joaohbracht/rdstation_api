const dbConfig = require("./db.config.js"); 3
const Sequelize = require("sequelize");

const sequelize = new Sequelize('elevo561_dw', 'elevo561_dwbi', ',tDkhl58v5EK', {
  host: "50.116.87.144",
  port: 3306,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.rdstation = require("../models/rdstation.model.js")(sequelize, Sequelize);

module.exports = db;