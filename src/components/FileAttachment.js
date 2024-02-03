import { handleFileSelect } from '../js/validations/excelValidation'
import { updateContent } from '../js/translator'
import { defineTotalPoints, getClansAssists } from '../js/pointAssignment';

export const showFileAttachment = (element) => {
    let daysPerClass = {};
    element.innerHTML = ` 
        <div class="file">
            <h1 data-i18n="loadFile" class="fw-bold"></h1>
            <div class='fileInfo' >
                <div class="fileInfo__row" id="development">
                    <div data-i18n="development" class='fileInfo__row--item'>Desarrollo de software</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="english">
                    <div data-i18n="english" class='fileInfo__row--item'>Ingles</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="skills">
                    <div data-i18n="humanity" class='fileInfo__row--item'>Habilidades</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" id="review">
                    <div data-i18n="review" class='fileInfo__row--item'>Review</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
            </div>
            <label for='formFile' class="d-flex flex-column py-2 align-items-center file_input" id="labelFile">
                <figure>
                    <img src="/icons/file_upload.svg" width="100" alt="logo">
                </figure>
                <h3 data-i18n="developers" >Drop your file here!</h3>
                <p data-i18n="developers" >Only .xlsx files are accepted.</p>
                <input class="form-control" type="file" id="formFile">
            </label>
        </div>`;

    // DRAG AND DROP EVENT ---->

    const inputElement = element.querySelector('#formFile');
    const labelFile = document.getElementById('labelFile');

    const developmentContainer = document.getElementById("development");
    const englishContainer = document.getElementById("english");
    const skillsContainer = document.getElementById("skills");
    const reviewContainer = document.getElementById("review");

    inputElement.addEventListener('change', handleFileSelect);

    const active = () => {
        labelFile.classList.add('active')
    }
    const inactive = () => {
        labelFile.classList.remove('active')
    }

    function activeDragArea(e) {
        e.preventDefault();
        ['dragenter','dragover','drop'].forEach(event =>{
            labelFile.addEventListener(event,active)
        });
        ['dragleave'].forEach(event =>{
            labelFile.addEventListener(event,inactive)
        })
    }

    function appendDay(className, element){
        let formatted = className.toLowerCase();
        console.log("appending to", formatted);

        if(formatted.includes("desarrollo")){
            developmentContainer.append(element);
            developmentContainer.children[0].classList.add("loaded");
        }else if(formatted.includes("ingles")){
            englishContainer.append(element);
            englishContainer.children[0].classList.add("loaded");
        }else if(formatted.includes("habilidades")){
            skillsContainer.append(element);
            skillsContainer.children[0].classList.add("loaded");
        }else{
            reviewContainer.append(element);
            reviewContainer.children[0].classList.add("loaded");
        }
    }

    function handleDrop(e) {
        e.preventDefault();
        const dt = e.dataTransfer;
        handleFileSelect(dt, (sheets) => {
            document.querySelectorAll(".waiting").forEach(element => element.style.display = "none");

            let className = sheets[0].data[1][2];
            let aux = [];

            sheets.forEach(el => {
                aux.push({ sheetName: el.sheetName, data: el.data.slice(5).filter(el => el.length !== 0) });
            });

            aux.forEach(el => {
                if(!document.querySelector(`.${className[0].toLowerCase()}_${el.sheetName}`)){
                    let div = document.createElement("div");
                    div.textContent = el.sheetName;
                    div.classList.add("days", `${className[0].toLowerCase()}_${el.sheetName}`);
                    appendDay(className, div);
                }
            })

            daysPerClass[className] = aux;
            if(Object.keys(daysPerClass).length === 4) {
                // THIS RETURNS ALL THE POINTS ASSIGNED PER DAY AND CLAN
                let clansAssists = getClansAssists(daysPerClass);
                let result = defineTotalPoints(clansAssists);
                console.log({ clansAssists, clansTotalPoints: result });
            };
        });
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
        labelFile.addEventListener(event, activeDragArea);
    });

    labelFile.addEventListener('drop', handleDrop);

    updateContent()
};
