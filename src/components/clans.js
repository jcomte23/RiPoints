import { updateContent } from "../js/translator";
import { ranking } from "./ranking"

export const showClans = (element) => {
    element.innerHTML = `
        <section class="p-1 clans-table">
        <article class="bg-secondary rankings-clanes text-center text-white px-4">
            <h1 data-i18n="clan_ranking" class="text-capitalize">clasificación de clanes</h1>
        </article>
        <article class="table-responsive">
            <table class="table table-borderless">
                <thead>
                    <tr>
                        <th class="text-center col-3"><button type="button" class="btn btn-primary rounded-pill w-100">Posicion</button></th>
                        <th class="text-center col-7"><button type="button" class="btn btn-primary rounded-pill w-100">Clan</button></th>
                        <th class="text-center col-3"><button type="button" class="btn btn-primary rounded-pill w-100">Puntos</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="text-center col-3"><button type="button" class="btn btn-secondary rounded-pill w-100">1</button></td>
                        <td class="text-center col-7"><button type="button" class="btn btn-secondary rounded-pill w-100">meta</button></td>
                        <td class="text-center col-3"><button type="button" class="btn btn-secondary rounded-pill w-100">100</button></td>
                    </tr>
                </tbody>
            </table>
        </section>
    `
 updateContent()
}

