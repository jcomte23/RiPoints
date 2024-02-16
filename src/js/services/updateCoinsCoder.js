export const updateCoinsCoder = async (id, amount) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });
};
