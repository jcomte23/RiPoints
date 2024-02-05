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
  } else if(!urlCompleta.includes(userOnline.role.name) && userOnline.role.name==="trainer"){
    window.location.href = "/src/pages/trainer/index.html"
  } else if(!urlCompleta.includes(userOnline.role.name) && userOnline.role.name==="coder"){
    if (!authorized) {
      alert("hola")
      // window.location.href = "/"
    }else{
      window.location.href = "/src/pages/coder/index.html"
    }
  }
})()