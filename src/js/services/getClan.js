export const getAllClan = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/clans`)
  const data = await response.json()
  return data
}

// export const getAllClanCoins = async () => {
//   const response = await fetch(`${import.meta.env.VITE_BASE_URL}/clanCoins`);
//   const data = await response.json();

//   return data;
// };
