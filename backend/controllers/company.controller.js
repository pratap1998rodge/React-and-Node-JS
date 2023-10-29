const db = require("../models/initializeSequelize");
const { logger } = require("../winstonlogger/logger");
const moment = require("moment");
const Product = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.createCompany = async (req, res) => {
  try {
    await Company.create(req.body);
    res.json({
      message: "Company Created",
    });
    logger.info(
      "info Company Created successfully" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  } catch (error) {
    logger.error(
      "Some error occurred while Create and Save a new Company" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  }
};
