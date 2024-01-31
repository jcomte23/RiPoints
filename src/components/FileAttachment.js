import { handleFileSelect } from '../js/validations/excelValidation'

export const showFileAttachment = (element) => {

    element.innerHTML = ` 
        <div class="m-4 p-2 gap-4 d-flex flex-column">
            <h1 class="fw-bold">Carga de puntos</h1>
            <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
                <label for="date" class="fs-4">Fecha:</label>
                <input class="" type="date" name="" id="date" />
            </div>
            <label class="d-flex flex-column gap-4 py-3 w-50 align-items-center rounded" id="file_input">
                <figure>
                    <img src="/icons/file_upload.svg" width="100" alt="logo">
                </figure>
                <h3>Drop your file here!</h3>
                <p>Only .xls or .xlsx files are accepted.</p>
                <input class="form-control" type="file" id="formFile">
            </label>
        </div>`;

    // Agregar el evento onchange después de cargar el script
    const inputElement = element.querySelector('#formFile');
    inputElement.addEventListener('change', handleFileSelect);
};
