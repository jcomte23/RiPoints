import { getDataFromDifferentEndpoints } from '../js/services/helpers';
import { updateContent } from '../js/translator';
import { calcScoreCoins, calcWinCoins } from '../js/services/getWinCoins';
import { modal } from "./modal";

export async function loadCodersTr(element) {
  let list = await getDataFromDifferentEndpoints('users?rolId=3&_embed=clan&_embed=scoreCoins&_embed=winCoins');

  list.forEach((coder) => {
    let add = calcWinCoins(coder.winCoins);
    element.innerHTML += `
      <tr>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td>${coder.clan.name}</td>
        <td data-plus=${add == 0 ? '' :add > 0 ? `"+${add}" class="plus"`:`"${add}" class="less"` } >${calcScoreCoins(coder.scoreCoins) + add}</td>
        <td><button class="edit-btn btn btn-primary text-capitalize" data-i18n="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="onEdit(event,'${coder.id}')" data-id="${coder.id}">Edit</button></td>
      </tr>
    `;
  });

  modal(element);
  updateContent();
}