


let counts = setInterval(updated);
let limit = +document.getElementById('counter').innerText
let upto = 0;
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++upto;
    if (upto == limit) {
        clearInterval(counts);
    }
}


let browser, usrAg = navigator.userAgent;    
usrAg = usrAg.toLowerCase();        
switch (true){
    case (usrAg.indexOf("edg/") > -1):
        browser = "Microsofot Edge";
        break;
    case (usrAg.indexOf("safari") > -1):
        browser = "Apple Safari";
        break;
    case (usrAg.indexOf("chrome") > -1):
    browser = "Google chrome";
    document.querySelector(".containerCoder").classList.add("conteinerCoder__animation");

    break;
  
    case (usrAg.indexOf("opr") > -1):
        browser = "Opera";
        break;
    case (usrAg.indexOf("firefox") > -1):
        browser = "Mozilla Firefox";
        break;
    case (sUsrAg.indexOf("msie") > -1):
        browser = "Microsofot Explorer";
        break;
defaul:
       browser = "Desconocido"
}
console.log("Su navegador es "+browser);

