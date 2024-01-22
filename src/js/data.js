export const getAllUsers = async () => {
  const data = await fetch("/src/js/data/users.json").then(response => response.json());
  return data.users;
};
