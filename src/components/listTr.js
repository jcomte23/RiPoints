async function getCoders() {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/users?roleId=3`);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function loadCodersTr(element) {
  let list = await getCoders();

  list.forEach((coder) => {
    element.innerHTML += `
    <tr>
      <td>${coder.name}</td>
      <td>${coder.lastName}</td>
      <td>${coder.clanId}</td>
      <td>${Object.entries(coder.day_point).reduce((acc, curr) => Number(curr[1]) + acc, 0)}</td>
      <td><button class="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
    </tr>
    `;
  });
}
