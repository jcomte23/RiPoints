(() => {
  const user = localStorage.getItem("userStorage")
  if (user) {
    userOnline = JSON.parse(user)
  } else {
    window.location.href = "/";
  }
})();
