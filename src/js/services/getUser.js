export const getUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?userName=${user.userName}`);
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

//Esta validacion no es tan necesaria pero por buenas practicas la hago
export const getRolUser = async (idRol) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/rol/${idRol}`);
  const data = await response.json();

  return data;
};
