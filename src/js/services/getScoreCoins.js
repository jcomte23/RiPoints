
export const getScoreCoinsByDateAndUserId = async (date,userId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/scoreCoins?date.fullDate=${date}&userId=${userId}`
  );
  const data = await response.json();

  return data;
}