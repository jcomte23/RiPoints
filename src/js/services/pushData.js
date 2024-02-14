//! addCoder:
export const createScoreCoins = async (data) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
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
