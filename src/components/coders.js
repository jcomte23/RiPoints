import { filter } from "../js/coder/coders";
import { getTrainerClans } from "../js/services/getTrainerClans";
import { loadCodersTr } from "./listTr";
import { updateContent } from "../js/translator";

const session = JSON.parse(localStorage.getItem("userStorage"));

let trainerClans = [];

document.addEventListener("DOMContentLoaded", async () => {});

export async function showCoders(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    // cargar los clanes asignados al trainer
    if (session.rol.name == "trainer") {
        trainerClans = await getTrainerClans(session.id);
    }

    element.innerHTML = `
  ${
      session.rol.name == "trainer"
          ? `
      <div class="ownClanCoins" >

        <div class="ownClanCoins__card shadow-lg" >
          <h1 class="ownClanCoins__card-title" data-i18n="assigned_clans"></h1>
          
          <div class="ownClanCoins__card-body" > 

            <div class="ownClanCoins__card-body-figure" >
              <figure class="fancyLetter">${trainerClans[0].at(0)}</figure>
              <span>${trainerClans && trainerClans[0]}</span>
            </div>

            <div class="ownClanCoins__card-body-figure" >
            <figure class="fancyLetter">${trainerClans[1].at(0)}</figure>
              <span>${trainerClans && trainerClans[1]}</span>
            </div>
          </div>
        </div>


        <div class="ownClanCoins__card shadow-lg" >
          <h1 class="ownClanCoins__card-title" >Coins</h1>
        
        <div class="ownClanCoins__card-body border-extra" > 
          <div class="ownClanCoins__card-body-coins" >
            <h3 data-i18n="assigned" >Asignados</h3>
            <span>40</span>
          </div>

          <div class="ownClanCoins__card-body-coins" >
            <h3 data-i18n="remaining">Restantes</h3>
            <span>10</span>
          </div>
        </div>

        <div class="ownClanCoins__card-total">
          <span data-i18n="total_coins">Coins totales:</span>
          <span>50</span>
        </div>
          
        </div>
      </div>
    `
          : ""
  }
    <div class="listCoders shadow-lg">
      <div class="listCoders__header" >
        <h2 data-i18n="developers" ></h2>
        <div class="search" >
          <input class="my-2" type="text" name="" id="searchKeywords" i18n-placeholder="developers" />
          <i class="bi bi-search search__icon fs-5 "></i>
        </div>
      </div>

      <table id="myTable" class="listCoders__table">
        <thead>
          <tr>
            <th data-i18n="name" ></th>
            <th data-i18n="last_name" ></th>
            <th data-i18n="clans" ></th>
            <th ${session.rol.name == "trainer"?`class="d-none"`:``} data-i18n="points" ></th>
            <th data-i18n="actions" ></th>
          </tr>
        </thead>
        <tbody id="codersList" >
        </tbody>
      </table>
    </div>
    `;

    loadCodersTr(document.getElementById("codersList")).then(() => {
        filter();
    });
    updateContent();
}
