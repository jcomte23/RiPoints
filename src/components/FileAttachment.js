import { handleFileSelect } from '../js/validations/excelValidation'

export const showFileAttachment = (element) => {

    element.innerHTML = ` 
        <div class="m-4 p-2 gap-4 d-flex flex-column">
            <h1 class="fw-bold">Carga de puntos</h1>
            <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
                <label for="date" class="fs-4">Fecha:</label>
                <input class="" type="date" name="" id="date" />
            </div>
            <label for='formFile' class="d-flex flex-column gap-4 py-3 w-50 align-items-center file_input" id="labelFile">
                <figure>
                    <img src="/icons/file_upload.svg" width="100" alt="logo">
                </figure>
                <h3>Drop your file here!</h3>
                <p>Only .xlsx files are accepted.</p>
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
        handleFileSelect(dt);
    }

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(event => {
        labelFile.addEventListener(event, activeDragArea);
    });

    labelFile.addEventListener('drop', handleDrop);
};
