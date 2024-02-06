export const getAllWinCoins = async () => {
  const response = await fetch(
    `http://localhost:3000/winCoins?_embed=scoreCoin`
  );
  const data = await response.json();

  return data;
};
