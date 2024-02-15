export const updateDailycoins = async (amountDay, scoreCoinId) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins/${scoreCoinId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amountDay }),
  });
};
