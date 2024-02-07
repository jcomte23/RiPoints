import { filter } from "../js/coder/coders";
import { updateContent } from "../js/translator";
import { loadCodersTr } from "./listTr";

export function showCoders(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  element.innerHTML = `
    <form class="d-flex form-control flex-column form-coders">
       <h2 data-i18n="developers" ></h2>
       <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search..." />

       
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
       </form> 

    `;

  loadCodersTr(document.getElementById("codersList")).then(() => {
    filter();
  });
  updateContent();
}
