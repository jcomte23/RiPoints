import { filter } from "../js/coder/coders";
import { updateContent } from "../js/translator";
import { modal } from "./modal";
import { loadCodersTr } from "./listTr";
import '../scss/coders.scss'

export function showCoders(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  element.innerHTML = `
    <div class="listCoders">
      <div class="listCoders__header" >
        <h2 data-i18n="developers" ></h2>
        <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search..." />
      </div>
       
      <table id="myTable" class="table mt-3">
        <thead>
          <tr>
            <th data-i18n="name" ></th>
            <th data-i18n="last_name" ></th>
            <th data-i18n="clans" ></th>
            <th data-i18n="points" ></th>
            <th data-i18n="actions" ></th>
          </tr>
        </thead>
        <tbody id="codersList" >
        </tbody>
      </table>
    </div> 

    `;

  modal(element);

  loadCodersTr(document.getElementById("codersList")).then(() => {
    filter();
  });
  updateContent();
}
