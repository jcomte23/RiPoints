export const getUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?userName=${user.userName}&_embed=rol`)
  const data = await response.json();
  if (data.length === 0) {
    return null
  } else {
    if (data[0].password === user.password) {
      return data[0]
    } else {
      return undefined
    }
  }
}

export const getUserById = async (userId) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?id=${userId}`)
  const data = await response.json()
  return data
}

export const getCodersByIdClan = async (clanId) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users?rolId=3&clanId=${clanId}`
  );
  const data = await response.json();

  return data;
}