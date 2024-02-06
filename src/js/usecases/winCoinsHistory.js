import { getAllWinCoins } from "../services/getAllWinCoins";

export const historyWinCoinsByuserId = async (userId) => {
  const allWincoins = await getAllWinCoins();
  const filterWinCoinByUserId = allWincoins.filter((winCoin) => {
    return winCoin.scoreCoin.userId == userId;
  });
  //localStorage.setItem("historyCoins",filterWinCoinByUserId);
  return filterWinCoinByUserId;
};

