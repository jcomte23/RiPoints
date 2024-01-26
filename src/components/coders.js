export const showCoders = (element) => {
    element.innerHTML = ` 
    <form class="d-flex flex-column ">
    <h2>Corders</h2>
    <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search" />
    <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
        <label for="dateStart">Desde:</label>
        <input type="date" name="" id="dateStart" />
        <label for="dateEnd">Hasta:</label>
        <input type="date" name="" id="dateEnd" />
    </div>
    </form> 
    `
}

export const containerTable = document.getElementById("containerTable");

//creando form: no se usa innerHTML para sguir lineamientos de seguridad.
const formCoders = document.createElement("form");
formCoders.classList.add("form-inline");

//encabezado
const title = document.createElement("h2");
title.innerText = "Coders";

//filtro por palabras
const filterSearchKeywords = document.createElement("input");
filterSearchKeywords.setAttribute("type", "text");

// filtros de fechas
const filterDateStartLabel = document.createElement("label");
filterDateStartLabel.setAttribute("for", "dateStart");
filterDateStartLabel.textContent = "Desde:";
const filterDateStart = document.createElement("input");
filterDateStart.setAttribute("id", "dateStart");

const filterDateEndLabel = document.createElement("label");
filterDateEndLabel.setAttribute("for", "dateStart");
filterDateEndLabel.textContent = "Hasta:";
const filterDateEnd = document.createElement("input");
filterDateStart.setAttribute("type", "date");
filterDateEnd.setAttribute("type", "date");

//se añaden los elemntos
formCoders.appendChild(title);
formCoders.appendChild(filterSearchKeywords);
formCoders.appendChild(filterDateStartLabel);
formCoders.appendChild(filterDateStart);
formCoders.appendChild(filterDateEndLabel);
formCoders.appendChild(filterDateEnd);
containerTable.appendChild(formCoders);
