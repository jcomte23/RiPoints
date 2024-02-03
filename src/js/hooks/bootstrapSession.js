(() => {
  let userOnline
  const urlCompleta = window.location.href;
  const user = localStorage.getItem("userStorage")
  const authorized = JSON.parse(localStorage.getItem("isAutorizated"))
  if (user && authorized===true) {
    userOnline = JSON.parse(user)
  } else {
    window.location.href = "/";
  }

  if (!urlCompleta.includes(userOnline.role.name) && userOnline.role.name==="admin") {
    window.location.href = "/src/pages/admin/index.html"
    alert("ho autorizado")
  } else if(!urlCompleta.includes(userOnline.role.name) && userOnline.role.name==="trainer"){
    window.location.href = "/src/pages/trainer/index.html"
    alert("ho autorizado")
  } else if(!urlCompleta.includes(userOnline.role.name) && userOnline.role.name==="coder"){
    window.location.href = "/src/pages/coder/index.html"
    alert("ho autorizado")
  }
})()