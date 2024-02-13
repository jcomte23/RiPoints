//! scoreCoin: userId,date,attendantCoins
export const createScoreCoins = async (scoreCoin) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins`, {
    method: "POST",
    body: JSON.stringify(scoreCoin),
    headers: { "Content-Type": "application/json" },
  });
};

//! addCoder:
export const addCoder = async (data) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};
