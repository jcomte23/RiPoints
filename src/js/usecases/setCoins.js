import { saveExtraCoins } from "../services/saveExtraCoins";

export const setCoinsByUser = async (coins) => {
  const user = JSON.parse(localStorage.getItem("userStorage"));
  const coderId = localStorage.getItem("coderEdit");
  //const coder = await getUserById(coderId);
  const comment = document.getElementById("observations").value;
  const date = document.getElementById("fecha").value;
  const data = {
    coins,
    comment,
    user: { name: `${user.name} ${user.lastName}`, id: user.id },
    coderId: coderId,
    date:date
  };
  await saveExtraCoins(data);
  setTimeout(() => {
    location.reload()
  }, 2000);
};
