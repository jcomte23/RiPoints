export const getUser = async (user) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/user`);
  const data = await response.json();
  
  return data.find((userCache) => {
    return (
      userCache.userName == user.userName &&
      userCache.password === user.password
    );
  });
};

//Esta validacion no es tan necesaria pero por buenas practicas la hago
export const getRolUser = async (idRol) => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/rol`);
  const data = await response.json();

  return data.find((rolCache) => {
    return idRol === rolCache.id;
  });
};
