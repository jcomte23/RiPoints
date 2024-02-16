export const updateCoinsClan = async (id, points) => {
  await fetch(`${import.meta.env.VITE_BASE_URL}/clans/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ points }),
  });
};