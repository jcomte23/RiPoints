export async function get(str) {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${str}`);
    const data = await response.json();

    return data;
}

export function toCapitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// to update clan points
export async function updateClanPoints(){
    const clans = await get('clans')
    return 0
    // Sorting the ranking by points in descending order !!! IT'S BETTER TO SORT BY THE REQUEST, HOW?: this way: 'clans?_sort=-points'
    // const sortedClans = Object.values(clans).sort((a, b) => b.points - a.points);
}