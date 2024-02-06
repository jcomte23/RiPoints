(async () => {
  let userOnline;
  const urlCompleta = window.location.href;
  const user = localStorage.getItem("userStorage");
  const authorized = JSON.parse(localStorage.getItem("isAutorizated"));
  if (user && authorized === true) {
    userOnline = await JSON.parse(user);
  } else {
    window.location.href = "/";
  }

  if (
    !urlCompleta.includes(userOnline.rol.name) &&
    userOnline.rol.name === "admin"
  ) {
    if (
      !urlCompleta.includes(userOnline.rol.name) &&
      userOnline.rol.name === "admin"
    ) {
      window.location.href = "/src/pages/admin/index.html";
    } else if (
      !urlCompleta.includes(userOnline.rol.name) &&
      userOnline.rol.name === "trainer"
    ) {
      window.location.href = "/src/pages/trainer/index.html";
    } else if (
      !urlCompleta.includes(userOnline.rol.name) &&
      userOnline.rol.name === "coder"
    ) {
      window.location.href = "/src/pages/coder/index.html";
    }
  }
})();
