let points = [4,3.1,2.2,1.3,0.4,3,2,1,0,3.01,2.02,1.03,0.04,0.3,0.2,0.1,0.31,0.22,0.13,0.01,0.02,0.03,2.1,1.2,1.1,2.11,1.21,1.12,0.21,0.11,0.12,1.11];

let point_result = [2,2,2,2,0,-5,-5,-5,-2,1,1,1,1,0,0,0,1,1,1,-5,-5,-5,2,2,2,1,1,1,0,0,0,1];

let year = "2024";
let month = "02";

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


function getClansAndStudents(codersData) {
  let days = {};
  let sheets = Object.entries(codersData);
    sheets[0][1].forEach((el, sheetIndex) => {
        days[el.sheetName] = {};

        el.data.slice(5).filter(el => el.length !== 0).forEach((student, studentIndex) => {
            if (!student[1]) return;

            days[el.sheetName][student[3]] || (days[el.sheetName][student[3]] = { students: [], totalpoints: 0 });

            let studentClass2 = sheets[1][1][sheetIndex].data.slice(5).filter(el => el.length !== 0)[studentIndex];
            let studentClass3 = sheets[1][1][sheetIndex].data.slice(5).filter(el => el.length !== 0)[studentIndex];
            let studentClass4 = sheets[1][1][sheetIndex].data.slice(5).filter(el => el.length !== 0)[studentIndex];
            let finalPoints = calcPoints(
                assignRealValue(...student.slice(4)),
                assignRealValue(...studentClass2.slice(4)),
                assignRealValue(...studentClass3.slice(4)),
                assignRealValue(...studentClass4.slice(4))
            );

            days[el.sheetName][student[3]].totalpoints += finalPoints;
            days[el.sheetName][student[3]].students.push(
                [
                    student[1] + " " + student[2],
                    finalPoints
                ]
            );
        })
    })
  return days;
}

function getFinalStructure(clansObject) {
  let result = [];

  Object.entries(getClansAndStudents(clansObject)).forEach(([day, clans]) => {
    Object.entries(clans).forEach(([clanName, clanInfo]) => {

      clanInfo.students.forEach(([student, point]) => {

        
        let nameSplitted = student.split(" ");
        let name = nameSplitted[1];
        let lastName = nameSplitted[0];
        let finalObj = { name, lastName, day_point: {} };
        
        let existent = result.find(studentObject => studentObject.name === name && studentObject.lastName === lastName);
        if (existent) {
          existent.day_point[`${year}-${month}-${day}`] = point;
          return
        }

        finalObj.roleId = 3;
        finalObj.history = "";
        finalObj.clanId = clanName.toLowerCase().replaceAll(" ", "_");
        finalObj.day_point[`${year}-${month}-${day}`] = point;
        result.push(finalObj);
        
      })
    
    })
  });

  return result;

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
  getFinalStructure
 };