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
