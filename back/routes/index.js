const { Router } = require("express");

const petShopRoutes = require("./petShopRoutes.js");

const routes = Router();

routes.get("/", (req, res) => {
  res.send("Server Ok");
});

routes.use("/petshop", petShopRoutes);

module.exports = routes;
