const database = [
  {
    company: "Meu Canino Feliz",
    weekSmallDogs: 20,
    weekBigDogs: 40,
    weekendSmallDogs: 24,
    weekendBigDogs: 48,
    distance: 2000,
  },
  {
    company: "Vai Rex",
    weekSmallDogs: 15,
    weekBigDogs: 50,
    weekendSmallDogs: 20,
    weekendBigDogs: 55,
    distance: 1700,
  },
  {
    company: "ChowChawgas",
    weekSmallDogs: 30,
    weekBigDogs: 45,
    weekendSmallDogs: 30,
    weekendBigDogs: 45,
    distance: 800,
  },
];

function getBestPriceFromPetShops(date, smallDogs, bigDogs) {
  const dateParsed = new Date(date);
  const DayOfWeek = dateParsed.getDay();
  const week = DayOfWeek === 0 || DayOfWeek === 6 ? false : true;

  const values = database.map((company) => {
    const smallDogsCost = week
      ? company.weekSmallDogs * smallDogs
      : company.weekendSmallDogs * smallDogs;
    const bigDogsCost = week
      ? company.weekBigDogs * bigDogs
      : company.weekendBigDogs * bigDogs;
    return {
      ...company,
      smallDogsCost,
      bigDogsCost,
      total: smallDogsCost + bigDogsCost,
    };
  });

  const valuesOrdered = values.sort((a, b) => {
    if (a.total < b.total) {
      return -1;
    }
    if (a.total > b.total) {
      return 1;
    }

    if (a.distance < b.distance) {
      return -1;
    }
    if (a.distance > b.distance) {
      return 1;
    }
    return 0;
  });

  return valuesOrdered;
}

module.exports = { getBestPriceFromPetShops };
