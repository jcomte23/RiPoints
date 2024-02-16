export const getScoreCoinsByDateAndUserId = async (date, userId) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/scoreCoins?date.fullDate=${date}&userId=${userId}`
  );
  const data = await response.json();

  return data;
};

export const getScoreCoinsByDate = async (date) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/scoreCoins?date.month=${date}`
  );
  const data = await response.json();

  return data;
};

export const getScoreCoinsByUserIdAndMonth = async (userId, month) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_BASE_URL
    }/scoreCoins?date.month=${month}&userId=${userId}`
    
  );
  const data = await response.json();

  return data;
};
