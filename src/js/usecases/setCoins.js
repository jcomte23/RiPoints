import { getUserById } from "../services/getUser";
// import { updateClansPoints } from "../services/helpers";
import { saveExtraCoins } from "../services/saveExtraCoins";

export const setCoinsByUser = async (coins) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const coderId = localStorage.getItem("coderEdit");
  const coder = await getUserById(coderId);
  const comment = document.getElementById("observations").value;
  const date = document.getElementById("fecha").value;
  const data = {
    coins,
    comment,
    user: { name: `${user.name} ${user.lastName}`, id: user.id },
    coderId: localStorage.getItem("coderEdit"),
    date:date
  };
  console.log(data);
  await saveExtraCoins(data);
  // await updateClansPoints(coder[0].clanId);
  setTimeout(() => {
    location.reload()
  }, 2000);
};
