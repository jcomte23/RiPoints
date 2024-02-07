
export const getAllWinCoins = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/winCoins?_embed=scoreCoin`
  );
  const data = await response.json();

  return data;
};

export const getWeekCoins = async (userId, week) => {
  const allCoins = await getAllWinCoins();
  const weekCoins = allCoins.filter((winCoin) => {
    return (
      winCoin.scoreCoin.userId == userId && winCoin.scoreCoin.date.week == week
    );
  });
  return weekCoins;
};
