
export const getAllUsers = async() => {
  const users = await fetch("../data/users.json");
  console.log(users);
};
