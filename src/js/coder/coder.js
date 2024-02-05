import * as bootstrap from "bootstrap";

import Chart from "chart.js/auto";
import { renderCoder } from "../../components/coder";
import { getLanguague } from '../../js/translator';

Chart.defaults.color = "#fff";

const floatingBackground = document.querySelector(".floatingBackground");
renderCoder(floatingBackground);

const  renderweekChart = async () => {
  let dictionary = await (await readLanguageFile()).json();
  const datos = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "viernes"],
    datasets: [
      {
        label: "Points",
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 5,
        data: [50, 30, 80, 60, 20],
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
};

const rendermothChart = () => {
  const datos = {
    labels: [
      "Octubre",
      "Noviembre",
      "Diciembre",
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
    ],
    datasets: [
      {
        label: "Points",
        backgroundColor: "#fff",
        borderColor: "#000",
        borderWidth: 1,
        color: "#fff",
        borderRadius: 5,
        data: [50, 30, 80, 60, 20, 20, 100, 200],
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

  // Crea el gráfico de barras
  const mothChart = document.querySelector("#graphic__moth");
  const createMothChart = new Chart(mothChart, {
    type: "bar",
    data: datos,
    options: opciones,
  });

  return createMothChart;
};

rendermothChart();
renderweekChart();
