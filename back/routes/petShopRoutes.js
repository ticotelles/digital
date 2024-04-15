const { Router } = require("express");
const { petShopService } = require("../service");

const petShopRoutes = Router();

petShopRoutes.post("/", (req, res) => {
  console.log("req.body", req.body);

  const { date, smallDogs, bigDogs } = req.body;

  if (!date) {
    throw new Error('Falta a Data');
  }

  if (!smallDogs && !bigDogs) {
    throw new Error('Falta o numero de cachorro');
  }

  const bestPrices = petShopService.getBestPriceFromPetShops(
    date,
    smallDogs,
    bigDogs
  );

  res.json(bestPrices);
});

module.exports = petShopRoutes;
