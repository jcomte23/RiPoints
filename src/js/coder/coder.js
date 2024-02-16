import * as bootstrap from "bootstrap";
import Chart from "chart.js/auto";
import { renderCoder } from "../../components/coder/coder";
import { getLanguague } from "../../js/translator";
import { getCoinByWeek } from "../usecases/calculateCoins";

document.addEventListener("DOMContentLoaded",async () => {
  const floatingBackground = document.querySelector(".floatingBackground")
  renderCoder(floatingBackground)
  await renderweekChart()
})


//Pintado de historial de graficas
Chart.defaults.color = "#fff";
const renderweekChart = async () => {
  const data = await getCoinByWeek();

  const datos = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Points",
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        data: data,
      },
    ],
  };

  // Opciones del gráfico
  const opciones = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const ctx = document.querySelector("#graphic__week");
  // Crea el gráfico de barras
  const weekchart = new Chart(ctx, {
    type: "bar",
    data: datos,
    options: opciones,
  });

  return weekchart;
}




// Sistema para cambio de icono en el traductor
const btnLang = document.getElementById("btn-lang");
const span_es = document.getElementById("span_es");
const span_en = document.getElementById("span_en");

let lang = getLanguague();
if (lang === "es") {
  span_es.classList.add("d-none");
  span_en.classList.remove("d-none");
} else {
  span_es.classList.remove("d-none");
  span_en.classList.add("d-none");
}

btnLang.addEventListener("click", () => {
  let lang = getLanguague();
  if (lang === "es") {
    span_es.classList.add("d-none");
    span_en.classList.remove("d-none");
  } else {
    span_es.classList.remove("d-none");
    span_en.classList.add("d-none");
  }
})
