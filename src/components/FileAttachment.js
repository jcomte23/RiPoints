import { handleFileSelect } from '../js/validations/excelValidation'

export const showFileAttachment = (element) => {

    element.innerHTML = ` 
        <div class="file">
            <h1 data-i18n="loadFile" class="fw-bold">Carga de puntos</h1>
            <div class='fileInfo' >
                <div class="fileInfo__row" >
                    <div data-i18n="development" class='fileInfo__row--item'>Desarrollo de software</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" >
                    <div data-i18n="english" class='fileInfo__row--item'>Ingles</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" >
                    <div data-i18n="humanity" class='fileInfo__row--item'>Habilidades</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
                <div class="fileInfo__row" >
                    <div data-i18n="review" class='fileInfo__row--item'>Review</div>
                    <div data-i18n="waiting" class='waiting'></div>
                </div>
            </div>
            <label for='formFile' class="d-flex flex-column gap-4 py-3 align-items-center file_input" id="labelFile">
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

    function handleDrop(e) {
        e.preventDefault();
        const dt = e.dataTransfer;
        handleFileSelect(dt, (sheets) => {
            console.log(sheets);
        });
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
        labelFile.addEventListener(event, activeDragArea);
    });

    labelFile.addEventListener('drop', handleDrop);
};
