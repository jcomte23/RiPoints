function onEdit(event, coderId) {
  console.log("editing");
  let labels = Array.from(event.target.parentNode.parentNode.childNodes)
    .map((element) => element.innerText)
    .filter((element) => element)
    .slice(0, 4);
  let values = [
    ["coder__name", labels[0]],
    ["coder__lastname", labels[1]],
    ["coder__clanid", labels[2]],
    ["totalPoints", labels[3]],
  ];

  values.forEach(
    (val) => (document.getElementById(val[0]).textContent = val[1])
  );
  console.log(coderId);
    localStorage.setItem("coderEdit", coderId);
}

function startCounter(userData){
  let upto = 0;
  let counts = setInterval(updated,50);
  function updated() {
    let count = document.getElementById("counter");
    count.textContent = upto;
    if (upto === userData.amount) {
      clearInterval(counts);
    } else {
      (userData.amount < 0) ? upto-- : upto++;// Incrementa el valor de 'upto' en cada iteración
    }
  }
}