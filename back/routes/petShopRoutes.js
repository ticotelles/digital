const { Router } = require("express");
const { petShopService } = require("../service");

const petShopRoutes = Router();

petShopRoutes.post("/", (req, res) => {

  const { date, smallDogs, bigDogs } = req.body;

  if (!date) {
   return res.status(400).send('Falta a Data');
    
  }

  if (!smallDogs && !bigDogs) {
    return res.status(400).send('Falta informar a quantidade de Cachorro');
  }

  const bestPrices = petShopService.getBestPriceFromPetShops(
    date,
    smallDogs,
    bigDogs
  );

  res.json(bestPrices);
});

module.exports = petShopRoutes;
