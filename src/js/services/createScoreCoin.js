import { calculateDate } from "../usecases/calculateCoins";

export const createScoreCoin = async (data,clanId) => {
  console.log(data);
  await fetch(`${import.meta.env.VITE_BASE_URL}/scoreCoins`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      clanId: clanId,
      date: calculateDate(data.date),
      userId: data.coderId,
      attendantCoins: 0,
      amountDay: 0
    }),
  });
};
