module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Cloudoptimo node application." });
  });

  // Retrieve all products
  router.get("/", products.getAllProducts);

  // Retrieve a single Product with guid
  router.get("/:guid", products.getProductByGuid);

  // Create a new Product
  router.post("/", products.createProduct);

  // Update a Product with guid
  router.put("/:guid", products.updateProduct);

  // Delete a Product with guid
  router.delete("/:guid", products.deleteProduct);

  app.use("/api", router);
};
