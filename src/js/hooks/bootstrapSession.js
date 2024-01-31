(() => {
  const isAuthorized = localStorage.getItem("isAuthorized");
  const path = window.location.pathname;
  const routeActive = path.substring(path.at(-2)("/") + 1);


  console.log(routeActive);
  const privateRoutes = ["admin/index.html","coder/index.html","trainer/index.html"];
  console.log(privateRoutes.includes(routeActive));

  if (privateRoutes.includes(routeActive) && !isAuthorized) {
    window.location.href = "../index.html";
  }
})();
