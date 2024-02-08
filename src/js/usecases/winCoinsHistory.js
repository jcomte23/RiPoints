import { getAllWinCoins } from "../services/getWinCoins";

export const historyWinCoinsByUserId = async (userId) => {
  const allWinCoins = await getAllWinCoins();
  const filterWinCoinByUserId = allWinCoins.filter((winCoin) => {
    return winCoin.scoreCoin.userId == userId;
  });

  return filterWinCoinByUserId;
};

