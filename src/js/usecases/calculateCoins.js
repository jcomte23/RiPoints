import {
  getScoreCoinsByDateAndUserId,
  getScoreCoinsByUserIdAndMonth,
} from "../services/getScoreCoins";
import { getCodersByIdClan } from "../services/getUser";
import {
  getAllWinCoinsByUserIdAndDate,
  getWeekCoins,
} from "../services/getWinCoins";
import { updateCoinsClan } from "../services/updateCoinsClan";
import { updateCoinsCoder } from "../services/updateCoinsCoder";
import { updateDailycoins } from "../services/updateDailyCoins";

//Esta funcion se debe llamar diariamente, con preferencia cada que se suba el archivo de excel
//user: esto provine del excel, el cual debe contener el id del usuario y la cantida de puntos
export const calculateDailyCoins = async (user, date) => {
  const winCoins = await contWinCoins(user[0].id, date);
  const scoreScoinId = await getScoreCoinsByDateAndUserId(date, user[0].id);
  console.log(scoreScoinId);
  //! De momento es cero, pero ahi va el valor ganado por asistencia
  const extraCoins = amountCoins(winCoins, 0);

  await updateDailycoins(extraCoins, scoreScoinId[0].id);
  await calculateAmountCoinsByUser(user[0].id);
  await calculateAmountCoinsByClan(user[0].clanId);
};

const amountCoins = (winCoin, attendantCoin) => {
  return winCoin + attendantCoin;
};

const contWinCoins = async (userId, date) => {
  const extraCoins = await getAllWinCoinsByUserIdAndDate(userId, date);
  let totalCoins = 0;
  extraCoins.forEach((item) => {
    totalCoins += item.coins;
  });
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
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
};

export const getCoinByWeek = async () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const date = calculateDate();
  const weekCoins = await getWeekCoins(user.id, 7);
  console.log(date.week);
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
export const calculateAmountCoinsByUser = async (userId) => {
  const month = calculateDate().month;
  const monthlyScoreCoin = await getScoreCoinsByUserIdAndMonth(userId, month);
  const coins = amountCoinsCoder(monthlyScoreCoin);
  console.log(coins);
  await updateCoinsCoder(userId, coins);
};

const amountCoinsCoder = (monthlyScoreCoin) => {
  let totalCoins = 0;
  monthlyScoreCoin.forEach((coinsDay) => {
    totalCoins += coinsDay.amountDay;
  });
  console.log(totalCoins);
  return totalCoins;
};

export const calculateAmountCoinsByClan = async (clanId) => {
  const codersByClan = await getCodersByIdClan(clanId);
  const amountClan = amounCoinsClan(codersByClan);
  await updateCoinsClan(clanId, amountClan);
};

const amounCoinsClan = (coderCoins) => {
  let totalCoins = 0;
  console.log(coderCoins);
  coderCoins.forEach((coinsDay) => {
    totalCoins += coinsDay.amount;
  });
  console.log(totalCoins);
  return totalCoins;
};
