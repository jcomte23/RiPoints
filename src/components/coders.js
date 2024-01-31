// export const showCoders = (element) => {
//     element.innerHTML = ` 
//     
//     `
// }

export function showCoders(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
    element.innerHTML = `
    <form class="d-flex form-control flex-column form-coders">
       <h2 data-i18n="developers" ></h2>
       <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search" />
       <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
           <label for="dateStart">Desde:</label>
           <input type="date" name="" id="dateStart" />
           <label for="dateEnd">Hasta:</label>
           <input type="date" name="" id="dateEnd" />
       </div>

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
        <tbody>
            <tr>
            <td>John Clarsk</td>
            <td>Doe Danilton</td>
            <td>Lovelace</td>
            <td>100</td>
            <td><button class="btn btn-primary">Editar</button></td>
            </tr>
            <tr>
            <td>Jane Janie</td>
            <td>Smith Perfonson</td>
            <td>Meta</td>
            <td>75</td>
            <td><button class="btn btn-primary">Editar</button></td>
            </tr>
            <tr>
            <td>Bob Jainc</td>
            <td>Johnson Tomson</td>
            <td>Meta</td>
            <td>120</td>
            <td><button class="btn btn-primary">Editar</button></td>
            </tr>
        </tbody>
    </table>

    </form> 
    `

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    })
    
    // const containerTable = document.getElementById("containerTable");

    // //creando form: no se usa innerHTML para sguir lineamientos de seguridad.
    // const formCoders = document.createElement("form");
    // formCoders.classList.add("form-inline");

    // //encabezado
    // const title = document.createElement("h2");
    // title.innerText = "Coders";

    // //filtro por palabras
    // const filterSearchKeywords = document.createElement("input");
    // filterSearchKeywords.setAttribute("type", "text");

    // // filtros de fechas
    // const filterDateStartLabel = document.createElement("label");
    // filterDateStartLabel.setAttribute("for", "dateStart");
    // filterDateStartLabel.textContent = "Desde:";
    // const filterDateStart = document.createElement("input");
    // filterDateStart.setAttribute("id", "dateStart");

    // const filterDateEndLabel = document.createElement("label");
    // filterDateEndLabel.setAttribute("for", "dateStart");
    // filterDateEndLabel.textContent = "Hasta:";
    // const filterDateEnd = document.createElement("input");
    // filterDateStart.setAttribute("type", "date");
    // filterDateEnd.setAttribute("type", "date");

    // //se añaden los elemntos
    // formCoders.appendChild(title);
    // formCoders.appendChild(filterSearchKeywords);
    // formCoders.appendChild(filterDateStartLabel);
    // formCoders.appendChild(filterDateStart);
    // formCoders.appendChild(filterDateEndLabel);
    // formCoders.appendChild(filterDateEnd);
    // containerTable.appendChild(formCoders);

    // return containerTable
}


