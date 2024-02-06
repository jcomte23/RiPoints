import { get, toCapitalize, updateClanPoints } from '../js/services/helpers'

export async function ranking(about){
    // about what is the ranking
    let response = '';
    const rank = await get(about)
    console.log(rank)
    Object.entries(rank).forEach((el,index)=>{
        response +=
         `
             <tr>
                 <td class="text-center col-3"><button type="button" class="btn btn-secondary rounded-pill w-100">${index}</button></td>
                 <td class="text-center col-7"><button type="button" class="btn btn-secondary rounded-pill w-100">${toCapitalize(el[1].name)}</button></td>
                 <td class="text-center col-3"><button type="button" class="btn btn-secondary rounded-pill w-100">${el[1].points}</button></td>
             </tr>
         `
    })
    return response
}