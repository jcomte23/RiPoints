export const calcScoreCoins = (arr) => {
  if (arr.length) {
    let acc = 0;
    arr.forEach((coins) => {
      acc += coins.attendantCoins;
    });
    return acc;
  } else {
    return 0;
  }
};

export const calcWinCoins = (arr) => {
  if (arr.length) {
    let acc = 0;
    arr.forEach((coins) => {
      acc += coins.coins;
    });
    return acc;
  } else {
    return 0;
  }
};

export const getAllWinCoins = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/winCoins?_embed=scoreCoin`
  );
  const data = await response.json();

  return data;
};

export const getAmountByUserId = async (userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/scoreCoins?userId=${userId}`
  );
  const data = await response.json();
  return data;
};

export const getWeekCoins = async (userId, week) => {
  const allCoins = await getAmountByUserId(userId);
  const weekCoins = allCoins.filter((winCoin) => {
    return winCoin.date.week == week;
  });
  return weekCoins;
};
