document.addEventListener('DOMContentLoaded',()=>{
  let upto = 0;
  let limit = JSON.parse(localStorage.getItem("userStorage"));
  let counts = setInterval(updated,50);
  function updated() {
    let count = document.getElementById("counter");
    count.textContent = upto;
    if (upto === limit.amount) {
      clearInterval(counts);
    } else {
      (limit.amount < 0) ? upto-- : upto++;// Incrementa el valor de 'upto' en cada iteración
    }
  }
})

let browser,
  usrAg = navigator.userAgent;
usrAg = usrAg.toLowerCase();
switch (true) {
  case usrAg.indexOf("edg/") > -1:
    browser = "Microsofot Edge";
    break;
  case usrAg.indexOf("safari") > -1:
    browser = "Apple Safari";
    break;
  case usrAg.indexOf("chrome") > -1:
    browser = "Google chrome";
    document
      .querySelector(".containerCoder")
      .classList.add("conteinerCoder__animation");

    break;

  case usrAg.indexOf("opr") > -1:
    browser = "Opera";
    break;
  case usrAg.indexOf("firefox") > -1:
    browser = "Mozilla Firefox";
    break;
  case usrAg.indexOf("msie") > -1:
    browser = "Microsofot Explorer";
    break;
    defaul: browser = "Desconocido";
}
console.log("Su navegador es " + browser);
