export const getAllWinCoins = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/winCoins?_embed=scoreCoin`
  );
  const data = await response.json();

  return data;
};
