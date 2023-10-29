module.exports = (app) => {
  const company = require("../controllers/company.controller");

  var router = require("express").Router();

  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to Cloudoptimo node application." });
  });

  // Create a new Product
  router.post("/", company.createProduct);

  app.use("/api/company", router);
};
