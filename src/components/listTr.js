import { get } from '../js/services/helpers'
import { updateContent } from '../js/translator';

export async function loadCodersTr(element) {
  let list = await get('users?rolId=3&_embed=clan');

  list.forEach((coder) => {
    element.innerHTML += `
      <tr>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td>${coder.clan.name}</td>
        <td>${Object.entries(coder.day_point).reduce((acc, curr) => Number(curr[1]) + acc, 0)}</td>
        <td><button class="edit btn btn-primary text-capitalize" data-i18n="edit" data-bs-toggle="modal" data-bs-target="#exampleModal"></button></td>
      </tr>
    `;
  });
  updateContent();
}
