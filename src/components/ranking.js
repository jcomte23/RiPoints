import { getDataFromDifferentEndpoints, toCapitalize } from '../js/services/helpers'
import { setImageMultiple } from '../js/services/helpers';

export async function getRankingClans(about, element) {
    const rank = await getDataFromDifferentEndpoints(about)
    let clanNames = [];

    Object.entries(rank).forEach((el, index) => {
        clanNames.push(toCapitalize(el[1].name))
        element.innerHTML +=
            `
        <tr>
            <td>
                <div class="">${index + 1}</div>
            </td>
            <td>
                <div class="clan__image">
                    <div class="clan__image--item"></div>
                    <div class="">${toCapitalize(el[1].name)}</div>
                </div>
            </td>
            <td>
                <div class="">${el[1].points}</div>
            </td>
        </tr>
        `
    })
    setImageMultiple('.clan__image--item', clanNames)
}