import {
  calculateDailyCoins,
  getCurrentDate,
} from "../usecases/calculateCoins";
import { createScoreCoin } from "./createScoreCoin";
import { getScoreCoinsByDateAndUserId } from "./getScoreCoins";
import { getUserById } from "./getUser";

//! Estoy partiedo del supuesto que la tabla scoreCoins ya esta creada para ese dia
//scoreCoinId, mirar si es necesario, creo que ya con el id y la fecha basta
export const saveExtraCoins = async (data) => {
  const user = await getUserById(data.coderId);
  let scoreCoin = await getScoreCoinsByDateAndUserId(data.date,data.coderId);
  if (scoreCoin.length == 0) {
    await createScoreCoin(data,user[0].clanId);
    scoreCoin = await getScoreCoinsByDateAndUserId(data.date,data.coderId);
    console.log(data.date,data.coderId);
  }
  
  await fetch(`${import.meta.env.VITE_BASE_URL}/winCoins`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scoreCoinId: scoreCoin[0].id,
      userId: data.coderId,
      clanId: user[0].clanId,
      comment: data.comment,
      pointsaAllocator: data.user.name,
      coins: data.coins,
      date: data.date
    }),
  });
  calculateDailyCoins(user, data.date);
};
