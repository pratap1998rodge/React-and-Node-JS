//const dotenv = require('dotenv').config()

//In this class  initialize Sequelize
//const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    //logging:false,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,

    pool: {
      max: process.env.DB_POOL_MAX,
      min: process.env.DB_POOL_MIN,
      acquire: process.env.DB_POOL_ACQUIRE,
      idle: process.env.DB_POOL_IDLE,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/product.model")(sequelize, Sequelize);

module.exports = db, sequelize;
