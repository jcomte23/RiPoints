import { getAllWinCoins } from "../services/getWinCoins";

//Esta funcion se debe llamar diariamente, con preferencia cada que se suba el archivo de excel
//user: esto provine del excel, el cual debe contener el id del usuario y la cantida de puntos
export const calculateDailyCoins = async (user, date) => {
  const winCoins = await contWinCoins(user.id, date);
  console.log(winCoins);
  const scoreCoins = {
    date: calculateDate(date),
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

const contWinCoins = async (userId, date) => {
  const allWinCoins = await getAllWinCoins();
  const filterWinCoins = allWinCoins.filter((winCoin) => {
    return (
      winCoin.scoreCoin.userId == userId &&
      winCoin.scoreCoin.date.fullDate == date
    );
  });
  const totalCoins = filterWinCoins.reduce(
    (total, winCoin) => total + winCoin.coins,
    0
  );
  return totalCoins;
};
//Esta funcion sirve para cuando el trainer asigne puntos, por eso el undefined
export const calculateDate = (fullDate = undefined) => {
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
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = getCurrentDate();

  return {
    day: day,
    month: month,
    week: date ? fullDate : calculateWeek(year),
    fullDate: date ? fullDate : year,
  };
};

//Esta funcion calcula la semana en la cual se encuentra el registro
export const calculateWeek = (date) => {
  const startYear = new Date(date.getFullYear(), 0, 1);
  var firstDay = startYear.getDay();

  if (firstDay > 0) {
    startYear.setDate(startYear.getDate() + (7 - firstDay));
  }
  const differenceInDays = Math.round(
    (date - startYear) / (24 * 60 * 60 * 1000)
  );
  var weekYear = Math.ceil((differenceInDays + 1) / 7);

  return weekYear;
};

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return year + "-" + month + "-" + day;
};
