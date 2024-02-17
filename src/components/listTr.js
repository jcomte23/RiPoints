import { getDataFromDifferentEndpoints } from '../js/services/helpers';
import { updateContent } from '../js/translator';
import { calcScoreCoins, calcWinCoins } from '../js/services/getWinCoins';
import { modal } from "./modal";

const session = JSON.parse(localStorage.getItem("userStorage"));

export async function loadCodersTr(element) {
  let list = await getDataFromDifferentEndpoints('users?rolId=3&_embed=clan&_embed=scoreCoins&_embed=winCoins');
  console.log(list);
  list.forEach((coder) => {
    let add = calcWinCoins(coder.winCoins);
    element.innerHTML += `
      <tr>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td>${coder.clan.name}</td>
        <td ${session.rol.name == "trainer"?`class="d-none"`:``} data-plus=${add == 0 ? '' :add > 0 ? `"+${add}" class="plus"`:`"${add}" class="less"` } >${coder.amount}</td>
        <td><button class="edit-btn btn btn-primary text-capitalize" data-i18n="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="onEdit(event,'${coder.id}')" data-id="${coder.id}">Edit</button></td>
      </tr>
    `;
  });

  modal(element);
  updateContent();
}