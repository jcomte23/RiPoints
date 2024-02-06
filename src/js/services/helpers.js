export async function get(str) {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/${str}`);
    const data = await response.json();

    return data;
}

export function toCapitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}