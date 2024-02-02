export const getUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?userName=${user.userName}&_embed=role`);
  const data = await response.json();
  if (data.length === 0) {
    return null
  }else{
    if (data[0].password===user.password) {
      return data[0]
    }else{
      return undefined
    }
  }
};

