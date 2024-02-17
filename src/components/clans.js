import { updateContent } from "../js/translator";
import { getRankingClans } from "./ranking"
import '../scss/admin__trainer/_clans_table.scss'

export const showClans = async (element) => {
    element.innerHTML = `
        <section class="ranking">
            <article class="ranking__title">
                <h1 data-i18n="clan_ranking"></h1>
            </article>
            <table class="ranking__table">
                <tbody>
                    <tr>
                        <td><div data-i18n="position"></div></td>
                        <td><div data-i18n="clan"></div></td>
                        <td><div data-i18n="points"></div></td>
                    </tr>
                </tbody>
            </table>
        </section>
    `

    await getRankingClans('clans?_sort=-points',document.querySelector('.ranking__table tbody'))

    updateContent()
}

