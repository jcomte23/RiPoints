let points = [4,3.1,2.2,1.3,0.4,3,2,1,0,3.01,2.02,1.03,0.04,0.3,0.2,0.1,0.31,0.22,0.13,0.01,0.02,0.03,2.1,1.2,1.1,2.11,1.21,1.12,0.21,0.11,0.12,1.11];

let point_result = [2,2,2,2,0,-5,-5,-5,-2,1,1,1,1,0,0,0,1,1,1,-5,-5,-5,2,2,2,1,1,1,0,0,0,1];

let toFix = {
  "1.3000000000000003": 1.3,
  "2.0199999999999996": 2.02,
  "0.30000000000000004": 0.3,
  "0.31000000000000005": 0.31,
  "0.22000000000000003": 0.22,
  "1.2000000000000002": 1.2,
  "1.2100000000000002": 1.21,
  "0.21000000000000002": 0.21,
  "2.1100000000000003": 2.11,
  "2.01": 2.1
}

function calcPoints(...asistencias){
  if (asistencias.length !== 4) return null;
  
  let sum = asistencias.reduce((acc, curr) => acc + curr, 0);
  
  return (toFix[sum]) ? point_result[points.indexOf(toFix[sum])] : point_result[points.indexOf(sum)];
}

function assignRealValue(...assists){
  let values = [1, 0.01, 0.1, 0];
  if(assists.filter(el => el === 1).length > 1) return 0.01;
  let asistPos = assists.indexOf(1);
  return (asistPos >= 0) ? values[asistPos] : 0;
}


// ------------------------------------------


function defineTotalPoints(data) {
  let pointsPerDay = {};
  let entries = Object.entries(data);

  entries[0][1].forEach((element, outIndex) => {
      pointsPerDay[element.day] = {};

    Object.entries(element.clans).forEach((clan, clanIndex) => {
        pointsPerDay[element.day][clan[0]] = { totalPoints: 0, students: [] };
      clan[1].forEach(([student, assist], index) => {

            let pointSum = calcPoints(assist,
            Object.entries(entries[1][1][outIndex].clans)[clanIndex][1][index][1],
            Object.entries(entries[2][1][outIndex].clans)[clanIndex][1][index][1], 
            Object.entries(entries[3][1][outIndex].clans)[clanIndex][1][index][1]);

            pointsPerDay[element.day][clan[0]]["totalPoints"] += pointSum;
            pointsPerDay[element.day][clan[0]]["students"].push([student, pointSum]);

        })
      })
  })

  return pointsPerDay;
}

function getClansAssists(data) {
  let areas = {};

  for(let classObject of Object.entries(data)){
      classObject[1].forEach(element => {
          areas[classObject[0]] || (areas[classObject[0]] = []);

          let aux = {
              day: element.sheetName,
              clans: {

              }
          };

          element.data.forEach(el => {
            if(!el[3]) return;
            
            let studentName = el[1] + " " + el[2];
            let clan = el[3].toLowerCase().replaceAll(" ", "_");
            if(aux.clans[clan]) aux.clans[clan].push([studentName, assignRealValue(...el.slice(4))]);
            else aux.clans[clan] = [[studentName, assignRealValue(...el.slice(4))]];
          })

          areas[classObject[0]].push(aux);
      })
  }

  return areas;
}

function getFinalStructure(clansObject) {
  // clansTotalPoints[n_dia][nombre_clan][students][student_index]
  let result = [];

  Object.entries(clansObject).forEach(([day, clans]) => {
    Object.entries(clans).forEach(([clanName, clanInfo]) => {

      clanInfo.students.forEach(([student, point]) => {

        
        let nameSplitted = student.split(" ");
        let name = nameSplitted[1];
        let lastName = nameSplitted[0];
        let finalObj = { name, lastName, day_point: {} };
        
        let existent = result.find(studentObject => studentObject.name === name && studentObject.lastName === lastName);
        if (existent) {
          existent.day_point[day] = point;
          return
        }

        finalObj.roleId = 3;
        finalObj.history = "";
        finalObj.clanId = clanName;
        finalObj.day_point[day] = point;
        result.push(finalObj);
        
      })
    
    })
  });

  //console.log("FINAL RES", result);

}

function saveClansPoints(clanPoints){
  sessionStorage.setItem("clansPoints", JSON.stringify(clanPoints));
}

function getSavedClansPoints(){
  return JSON.parse(sessionStorage.getItem("clansPoints"));
}


export { 
  calcPoints, 
  assignRealValue, 
  saveClansPoints, 
  getSavedClansPoints,
  defineTotalPoints,
  getClansAssists,
  getFinalStructure
 };