import { saveExtraCoins } from "../services/saveExtraCoins";

export const setCoinsByUser = async (coins) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const comment = document.getElementById("observations").value;
  const data = {
    coins,
    comment,
    user: { name: `${user.name} ${user.lastName}`, id: user.id },
    coderId: localStorage.getItem("coderEdit"),
  };
  await saveExtraCoins(data);
  location.reload()
};
