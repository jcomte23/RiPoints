import { getAllWinCoins } from "../services/getAllWinCoins";

//Esta funcion se debe llamar diariamente, con preferencia cada que se suba el archivo de excel
//user: esto provine del excel, el cual debe contener el id del usuario y la cantida de puntos
export const calculateDailyCoins =  async (user) => {
  const winCoins = await contWinCoins(user.id);
  console.log(winCoins);
  const scoreCoins = {
    date: calculateDate(),
    userId: user.id,
    winCoinsTotal: winCoins,
    attendantCoins: user.attendantCoin,
    amount: amountCoins(winCoins, user.attendantCoin),
  };
  return scoreCoins;
};

const amountCoins = (winCoin, attendantCoin) => {
  return winCoin + attendantCoin;
};

const contWinCoins = async (userId) => {
  const allWincoins = await getAllWinCoins();
  const filterWinCoins = allWincoins.filter((winCoin) => {
    return winCoin.scoreCoin.userId == userId;
  });
  const totalCoins = filterWinCoins.reduce(
    (total, winCoin) => total + winCoin.coins,
    0
  );
  return totalCoins;
};

const calculateDate = () => {
  const date = new Date();
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  const days = [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = `${date.getFullYear()}-${date.getMonth() + 1}-${
    date.getDay() + 1
  }`;

  return { day: day, month: month, fullDate: year };
};
