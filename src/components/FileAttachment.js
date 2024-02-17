import { handleFileSelect } from "../js/validations/excelValidation";
import { updateContent } from "../js/translator";
import { getFinalStructure } from "../js/pointAssignment";
import { createScoreCoins, addCoder } from "../js/services/pushData";
import { calculateDate } from "../js/usecases/calculateCoins";
import { formatString } from "../js/services/helpers";
import { smallAlertError,smallAlertSuccess } from "../js/validations/alerts";

export let year = null;
export let month = null;
let listNoRepeatCoder = [];

export const showFileAttachment = (element) => {
  let daysPerClass = {};
  element.innerHTML = ` 
        <div class="file">
            <h1 data-i18n="loadFile" class="fw-bold"></h1>
            
            <div class="setDate" >
                <label data-i18n="setdate" for="start"></label>
                <input type="month" id="setDate" name="start" min="2023-01" />
            </div>


            <div class='fileInfo' >
                <div class="fileInfo__row" id="development">
                    <div data-i18n="development" class='fileInfo__row--item'></div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="english">
                    <div data-i18n="english" class='fileInfo__row--item'></div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="skills">
                    <div data-i18n="humanity" class='fileInfo__row--item'></div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="review">
                    <div data-i18n="review" class='fileInfo__row--item'></div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
            </div>

            <div class="loadData" >
                <button data-i18n="sendInfo" disabled class="loadData__buton" ></button>
            </div>

            <label for='formFile' class="file_input" id="labelFile">
                <figure>
                    <img src="/icons/file_upload.svg" width="100" alt="logo">
                </figure>
                <h3 data-i18n="drop" >Drop your file here!</h3>
                <p data-i18n="filesfilter" >Only .xlsx files are accepted.</p>
                <input multiple class="form-control" type="file" id="formFile">
            </label>
        </div>`;

  // SET DATE
  let date = document.getElementById("setDate");
  // get actual date
  date.value = new Date().toISOString().split("T")[0].slice(0, 7);
  year = date.value.slice(0, 4);
  month = date.value.slice(5, 7);

  // DRAG AND DROP EVENT ---->

  const inputElement = element.querySelector("#formFile");
  const labelFile = document.getElementById("labelFile");

  const developmentContainer = document.getElementById("development");
  const englishContainer = document.getElementById("english");
  const skillsContainer = document.getElementById("skills");
  const reviewContainer = document.getElementById("review");

  inputElement.addEventListener("change", handleDrop);

  const active = () => {
    labelFile.classList.add("active");
  };
  const inactive = () => {
    labelFile.classList.remove("active");
  };

  function activeDragArea(e) {
    e.preventDefault();
    ["dragenter", "dragover", "drop"].forEach((event) => {
      labelFile.addEventListener(event, active);
    });
    ["dragleave"].forEach((event) => {
      labelFile.addEventListener(event, inactive);
    });
  }

  function appendDay(className, element) {
    let formatted = className.toLowerCase();
    console.log("appending to", formatted);

    if (formatted.includes("desarrollo")) {
      developmentContainer.append(element);
      developmentContainer.children[0].classList.add("loaded");
    } else if (formatted.includes("ingles")) {
      englishContainer.append(element);
      englishContainer.children[0].classList.add("loaded");
    } else if (formatted.includes("habilidades")) {
      skillsContainer.append(element);
      skillsContainer.children[0].classList.add("loaded");
    } else {
      reviewContainer.append(element);
      reviewContainer.children[0].classList.add("loaded");
    }
  }

  function validateDays(sheets) {
    let entries = Object.entries(sheets);
    let daysOfReference = entries[0][1];

    for (let i = 0; i < daysOfReference.length; i++) {
      if (!entries[1][1][i] || !entries[2][1][i] || !entries[3][1][i]) {
        return false;
      } else if (
        daysOfReference[i].sheetName !== entries[1][1][i].sheetName ||
        daysOfReference[i].sheetName !== entries[2][1][i].sheetName ||
        daysOfReference[i].sheetName !== entries[3][1][i].sheetName
      ) {
        return false;
      }
    }

    return true;
  }

  function handleDrop(e) {
    e.preventDefault();
    const dt = e;
    handleFileSelect(dt, function (sheets) {
      document
        .querySelectorAll(".waiting")
        .forEach((element) => (element.style.display = "none"));

      let className = sheets[0].data[1][2];
      let aux = [];

      sheets.forEach((el) => {
        aux.push({
          sheetName: el.sheetName,
          data: el.data.slice(5).filter((el) => el.length !== 0),
        });
      });

      aux.forEach((el) => {
        if (
          !document.querySelector(
            `.${className[0].toLowerCase()}_${el.sheetName}`
          )
        ) {
          let div = document.createElement("div");
          div.textContent = el.sheetName;
          div.classList.add(
            "days",
            `${className[0].toLowerCase()}_${el.sheetName}`
          );
          appendDay(className, div);
        }
      });

      daysPerClass[className] = aux;

      if (Object.keys(daysPerClass).length === 4) {
        let btnLoadData = document.querySelector(".loadData__buton");
        btnLoadData.disabled = false;

        if (!validateDays(daysPerClass)) {
          smallAlertError(
            "Los dias no concuerdan, no se realizara ninguna operacion"
          );
          return;
        }else{
          smallAlertSuccess('Data loaded correctly')
        }

        let usersAndCoins = getFinalStructure(daysPerClass);

        //console.log(daysPerClass);
        //console.log(usersAndCoins);

        function validateCoder(named, lastName, clanId) {
          let name = formatString(named);
          if (listNoRepeatCoder.indexOf(name) == -1) {
            let coder = {
              rolId: "3",
              userName: formatString(`${name+lastName}`),
              password: formatString(`${name+lastName}`),
              name: name,
              lastName: formatString(lastName),
              clanId: clanId.replace("clan_", "").replace('clan ',''),
              amount: 0,
            };
            listNoRepeatCoder.push(name)
            //addCoder(coder);
          }
        }

        const formatString = (str) => {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[ ]+/g, "_").toLowerCase();
      } 

      function validateNullValueInObject(template){
        if (
          typeof template !== "object" ||
          !template.date ||
          !template.userId ||
          !template.attendantCoins ||
          !template.clanId
        ) {
          return false;
        }
        return true;
      }

      btnLoadData.addEventListener('click',()=>{
          let allCoders = [];
          usersAndCoins.forEach(({ name, lastName, day_point, clanId }) => {
              //let firstDayPoint = Object.values(day_point)[0];
              //let template = { date: calculateDate(), userId: formatString(`${name} ${lastName}`), attendantCoins: firstDayPoint, clanId };
              let firstDayPoint = Object.entries(day_point);
              firstDayPoint.forEach(([day, point]) => {
                  let actualDate = calculateDate();
                  actualDate.day = day;
                  let template = { 
                    userId: formatString(`${name} ${lastName}`), 
                    clanId: clanId.replace("clan_", "").replace('clan ',''),
                    date: actualDate, 
                    attendantCoins: point
                  }
                let validTemplate=validateNullValueInObject(template);
                if(validTemplate){
                  allCoders.push(template);
                  //createScoreCoins(template);
                  console.log(template);
                }
              })
              btnLoadData.disabled = true
          })
          console.log(allCoders);
          console.log(listNoRepeatCoder);

    
      })
       
      }
    });
  }

  ["dragenter", "dragover", "dragleave", "drop"].forEach((event) => {
    labelFile.addEventListener(event, activeDragArea);
  });

  labelFile.addEventListener("drop", handleDrop);

  updateContent();
};

