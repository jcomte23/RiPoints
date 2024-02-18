export async function getDataFromDifferentEndpoints(endpoint) {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
}

export function toCapitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatString = (str) => {
    return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[ ]+/g, "_")
    .toLowerCase();
};

// to update clan points
export async function updateClanPoints(){
    const clans = await getDataFromDifferentEndpoints('clans')
    console.log(clans);
    return 0
    // Sorting the ranking by points in descending order !!! IT'S BETTER TO SORT BY THE REQUEST, HOW?: this way: 'clans?_sort=-points'
    // const sortedClans = Object.values(clans).sort((a, b) => b.points - a.points);
}

export function setImageMultiple(selector,imageList,imagesExist = false){
    let listSelected = document.querySelectorAll(selector)
    if(imagesExist){
        //sehace un style.backgroundImage = ulr('imageList[i]')
        return 0
    }else{
        listSelected.forEach((el, index)=>{
            el.classList.add('fancyLetter')
            el.textContent = imageList[index].charAt(0)
        })
    }
}

// to update clan points
export async function updateClansPoints(clan) {
    const coders = await getDataFromDifferentEndpoints(`users?clanId=${clan}`)
    let acumulado = 0
    coders.forEach(element => {
        acumulado = (acumulado + element.amount)
    })
    changePointsClan(acumulado, clan)

}

async function changePointsClan(newPoints, clan) {
    await fetch(`${import.meta.env.VITE_BASE_URL}/clans/${clan}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ points: newPoints })
    })
}

