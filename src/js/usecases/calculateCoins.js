import { getAllWinCoins, getWeekCoins } from "../services/getWinCoins";

//Esta funcion se debe llamar diariamente, con preferencia cada que se suba el archivo de excel
//user: esto provine del excel, el cual debe contener el id del usuario y la cantida de puntos
export const calculateDailyCoins = async (user, date) => {
  const winCoins = await contWinCoins(user.id, date);
  console.log(winCoins);
  //! Mirar el formato final del json, porque aqui faltan algunos campos para que sea igual
  const scoreCoins = {
    date: calculateDate(date),
    userId: user.id,
    winCoinsTotal: winCoins,
    attendantCoins: user.attendantCoin,
    amountDay: amountCoins(winCoins, user.attendantCoin),
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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const year = getCurrentDate();

  return {
    day: day,
    month: month,
    week: fullDate ? calculateWeek(fullDate) : calculateWeek(year),
    fullDate: fullDate ? fullDate : year,
  };
};

//Esta funcion calcula la semana en la cual se encuentra el registro
export const calculateWeek = (dateString) => {
  const date = new Date(dateString);
  const startYear = new Date(date.getFullYear(), 0, 1);
  const firstDay = startYear.getDay();
  if (firstDay > 0) {
    startYear.setDate(startYear.getDate() + (7 - firstDay));
  }
  const differenceInDays = Math.round(
    (date - startYear) / (24 * 60 * 60 * 1000)
  );
  const weekYear = Math.ceil((differenceInDays + 1) / 7);

  return weekYear;
};

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return year + "-" + month + "-" + day;
};

export const getCoinByWeek = async () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const date = calculateDate();
  const weekCoins = await getWeekCoins(user.id, date.week);
  const accountWeekCoins = [0, 0, 0, 0, 0];

  for (const weekCoin of weekCoins) {
    const dayIndex = days.indexOf(weekCoin.date.day);
    if (dayIndex !== -1) {
      accountWeekCoins[dayIndex] += weekCoin.amountDay;
    }
  }
  return accountWeekCoins;
};

//? Esta funcion es la que debe trar todos los scoreCoins y comparar cada id, para luego modificarlo (Hacerle un pacth)
export const calculateAmountCoinsByUser = (userId) => {};
