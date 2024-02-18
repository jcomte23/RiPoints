import { updateClansPoints } from "../services/helpers";
import { saveExtraCoins } from "../services/saveExtraCoins";

export const setCoinsByUser = async (coins) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const comment = document.getElementById("observations").value;
  const date = document.getElementById("fecha").value;
  const data = {
    coins,
    comment,
    user: { name: `${user.name} ${user.lastName}`, id: user.id },
    coderId: localStorage.getItem("coderEdit"),
    date:date
  };
  await saveExtraCoins(data);
  console.log(user);
  console.log(user.clanId);
  await updateClansPoints(user.clanId)
  setTimeout(() => {
    location.reload()
  }, 2000);
};
