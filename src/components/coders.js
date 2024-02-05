import { filter } from "../js/coder/coders";
import { updateContent } from "../js/translator";
import { modal } from "./modal";
import { loadCodersTr } from "./listTr";

export function showCoders(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  element.innerHTML = `
    <form class="d-flex form-control flex-column form-coders">
       <h2 data-i18n="developers" ></h2>
       <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search" />

       
       <table id="myTable" class="table mt-3">
           <thead>
               <tr>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Clan</th>
               <th>Puntos</th>
               <th>Acciones</th>
               </tr>
           </thead>
           <tbody id="codersList" >
           </tbody>
       </table>
       </form> 

    `;

  modal(element);

  loadCodersTr(document.getElementById("codersList")).then(() => {
    filter();
  });
  updateContent();
}
