import { getAllWinCoins } from "../services/getAllWinCoins";

//Esta funcion se debe llamar diariamente, con preferencia cada que se suba el archivo de excel
export const calculateDailyCoins = async(userId) => {
  const allWincoins = await getAllWinCoins();
  console.log(allWincoins);
};

