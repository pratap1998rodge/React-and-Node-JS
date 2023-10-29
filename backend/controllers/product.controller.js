const db = require("../models/initializeSequelize");
const { logger } = require("../winstonlogger/logger");
const moment = require("moment");
const Product = db.products;
const Op = db.Sequelize.Op;

// Retrieve all Products from the database.
exports.getAllProducts = async (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  const product = await Product.findAll({ where: condition })
    //Testing
    //const product = await Product.findAll({ where:{price:40}  })

    .then((data) => {
      res.send(data);

      logger.error(
        "Retrieve all Products from the database." +
          moment().format("MMM d,YYYY,h:mm:ss")
      );
      logger.info(
        "Retrieve all Products from the database." +
          moment().format("MMM d,YYYY,h:mm:ss")
      );
    })
    .catch((err) => {
      logger.error("Some error occurred while retrieving Products.");
    });
};

// Find a single Product with an guid
exports.getProductByGuid = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        guid: req.params.guid,
      },
    });
    res.json(product[0]);
    logger.info(
      "Find a single Product with an guid successfully" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  } catch (error) {
    logger.error(
      "Some error occurred while Find a single Product with an guid" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  }
};

// Create and Save a new Product
exports.createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: "Product Created",
    });
    logger.info(
      "info Product Created successfully" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  } catch (error) {
    logger.error(
      "Some error occurred while Create and Save a new Product" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  }
};

// Update a Product by the guid in the request
exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        guid: req.params.guid,
      },
    });
    res.json({
      message: "Product Updated",
    });
    logger.info(
      "Product Updated successfully" + moment().format("MMM d,YYYY,h:mm:ss")
    );
  } catch (error) {
    logger.error(
      "Some error occurred while  Update a Product by the id in the request" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  }
};

// Delete a Tutorial with the specified guid in the request
exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        guid: req.params.guid,
      },
    });
    res.json({
      message: "Product Deleted",
    });
    logger.info(
      "Product Deleted successfully" + moment().format("MMM d,YYYY,h:mm:ss")
    );
  } catch (error) {
    logger.error(
      "Some error occurred while Delete a Product with the specified guid in the request" +
        moment().format("MMM d,YYYY,h:mm:ss")
    );
  }
};
