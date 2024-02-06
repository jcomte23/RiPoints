//! scoreCoin: userId,date,regularCoins,attendantCoins,amount
export const createScoreCoins = async (scoreCoin) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins`, {
    method: "POST",
    body: JSON.stringify(scoreCoin),
    headers: { "Content-Type": "application/json" },
  });
};

//! scoreCoin contiene los campos actulizar con el id de donde se actualiza
export const updateScoreCoins = async (scoreCoin) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins/${scoreCoin.id}`, {
    method: "PATCH",
    body: JSON.stringify(scoreCoin),
    headers: { "Content-Type": "application/json" },
  });
};
