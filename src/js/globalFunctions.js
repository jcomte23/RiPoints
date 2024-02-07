function onEdit(event){
    console.log("editing");
    let labels = Array.from(event.target.parentNode.parentNode.childNodes).map(element  => element.innerText).filter(element => element).slice(0, 4);
    let values = [["coder__name", labels[0]], ["coder__lastname", labels[1]], ["coder__clanid", labels[2]], ["totalPoints", labels[3]]];
    
    values.forEach(val => document.getElementById(val[0]).textContent = val[1]);
}