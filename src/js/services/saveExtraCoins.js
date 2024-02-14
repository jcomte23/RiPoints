import {
  getCurrentDate,
} from "../usecases/calculateCoins";
import { getScoreCoinsByDateAndUserId } from "./getScoreCoins";
import { getUserById } from "./getUser";

//! Estoy partiedo del supuesto que la tabla scoreCoins ya esta creada para ese dia
//scoreCoinId, mirar si es necesario, creo que ya con el id y la fecha basta
export const saveExtraCoins = async (data) => {
  const user = await getUserById(data.coderId);
  const scoreCoin = await getScoreCoinsByDateAndUserId(getCurrentDate(),data.coderId);
  console.log(scoreCoin);
  console.log(typeof getCurrentDate(), getCurrentDate());
  await fetch(`${import.meta.env.VITE_BASE_URL}/winCoins`, {
    method: "POST",

    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      scoreCoinId: scoreCoin.id,
      userId: data.coderId,
      clanId: user.clanId,
      comment: data.comment,
      pointsaAllocator: data.user.name,
      coins: data.coins,
      date: getCurrentDate(),
    }),
  });
  // const scoreCoins = await calculateDailyCoins();
  // console.log(scoreCoins);
};
