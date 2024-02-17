import { filter } from "../js/coder/coders";
import { updateContent } from "../js/translator";
import { loadCodersTr } from "./listTr";
import "../scss/coders.scss";

const session = JSON.parse(localStorage.getItem("userStorage"));

export function showCoders(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
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
              <img  src="/img/img_clans/meta.png" />
              <span>Meta</span>
            </div>

            <div class="ownClanCoins__card-body-figure" >
              <img src="/img/img_clans/lovelace.png"/>
              <span>Lovelace</span>
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
