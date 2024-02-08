export const historyWinCoinsByUserId = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?id=${userId}&_embed=winCoins`);
  const data = await response.json();
  return data[0].winCoins;
};

