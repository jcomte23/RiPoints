import Chart from "chart.js/auto";
import { getLanguague } from './../js/translator';

function readLanguageFile(){
    return fetch(`/locales/${getLanguague()}/translation.json`);
}

function toCapitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const lineChart = async (element, list) => {
  element.innerHTML = `<canvas id="myLineChart"></canvas>`;

  let dictionary = await (await readLanguageFile()).json();

  const data = {
    labels: dictionary.days.map((day) => {
      return toCapitalize(day);
    }),
    datasets: list.map((clan) => {
      return {
        label: clan,
        data: [10, 5, 14, 6, 8],
        borderColor: "#fe654f",
        backgroundColor: "#fe654f33",
        fill: false,
      };
    }),
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx) => dictionary.Pp,
        },
        tooltip: {
          mode: "index",
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "",
          },
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: dictionary.Pp,
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  const ctx = document.getElementById("myLineChart");
  Chart.defaults.color = "#FFFFFF";

  new Chart(ctx, config);
  
};



export const pieChart = async (element,list,clanData=[45,34,23,53,76,54]) => {
    element.innerHTML = ` <canvas id="myChart"></canvas>`;
    
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'pie',
    responsive: true,
    data: {
              labels: list.map((clan)=>{return clan}),
              datasets: [{
                backgroundColor:[
                   "#181e4b",
                   "#6b5cff",
                   "#5acca4",
                   "#2D9596",
                   "#e6ca52",
                   "#fe654f",
                   "#40A2E3",
                   "#DCFFB7",
                   "#ffffff",
                ],
                label: 'Rankig: ',
                data: clanData.map((data)=>{return data}),
                borderWidth: 1
              }]
            },
  });
}