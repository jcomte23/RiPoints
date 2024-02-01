import Chart from "chart.js/auto";
import { getLanguague } from './../js/translator';

function readLanguageFile(){
    return fetch(`/locales/${getLanguague()}/translation.json`);
}

export const lineChart = async (element) => {
  element.innerHTML = `<canvas id="myLineChart"></canvas>`;
  
  let dictionary = await (await readLanguageFile()).json();
  
  const data = {
    labels: dictionary.days,
    datasets: [
      {
        label: dictionary.FI,
        data: [10,5,14,6,8],
        borderColor: "#fe654f",
        backgroundColor: "#fe654f33",
        fill: true
      },
      {
        label: dictionary.FJ,
        data: [20,14,36,19,28],
        borderColor: "#e6ca52",
        backgroundColor: "#e6ca5233",
        fill: true
      },
      {
        label: dictionary.R,
        data: [10,12,25,13,18],
        borderColor: "#6b5cff",
        backgroundColor: "#6b5cff33",
        fill: true
      },
      {
        label: dictionary.P,
        data: [246,250,241,250,255],
        borderColor: "#5acca4",
        backgroundColor: "#5acca433",
        fill: true
      },
    ]
  };
    const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: (ctx) => dictionary.P
        },
        tooltip: {
          mode: 'index'
        },
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      },
      scales: {
        x: {
          title: {
            display: true,
            text: ''
          },
          grid: {
            display: false
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: dictionary.P
          },
          grid: {
            display: false
          }
        }
      }
    }
    };
    
  const ctx = document.getElementById('myLineChart');
  Chart.defaults.color = '#FFFFFF';

    new Chart(ctx, config);
    
}


export const pieChart = async (element,num) => {
    element.innerHTML = ` <canvas id="myChart"></canvas>`;
  
  let dictionary = await (await readLanguageFile()).json();
    
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'pie',
    responsive: true,
    data: {
              labels: [dictionary.P, dictionary.R, dictionary.FJ, dictionary.FI],
              datasets: [{
                backgroundColor:[
                    '#5acca4',
                    '#6b5cff',
                    '#e6ca52',
                    '#fe654f'
                ],
                label: '# of Votes',
                data: [num[0], num[1], num[2], num[3]],
                borderWidth: 1
              }]
            },
  });
}