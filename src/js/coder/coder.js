import * as bootstrap from "bootstrap";
import "../../scss/coder.scss";
import Chart from "chart.js/auto";

// Obtén el contexto del canvas
const ctx = document.querySelector("#graphic__week");

const mothChart = document.querySelector("#graphic__moth");
Chart.defaults.color = "#fff";

const renderweekChart = () => {
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
  const createMothChart = new Chart(mothChart, {
    type: "bar",
    data: datos,
    options: opciones,
  });

  return createMothChart;
};

rendermothChart();
renderweekChart();
