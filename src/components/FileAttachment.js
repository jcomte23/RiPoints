import { handleFileSelect } from '../js/validations/excelValidation'

export const showFileAttachment = (element) => {

    element.innerHTML = ` 
        <div class="m-4 p-2 gap-4 d-flex flex-column">
            <h1 class="fw-bold">Carga de puntos</h1>
            <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
                <label for="date" class="fs-4">Fecha:</label>
                <input class="" type="date" name="" id="date" />
            </div>
            <div class="d-flex flex-row gap-4 py-3 w-75 align-items-center border border-primary p-4 border-opacity-75 rounded">
                <figure>
                    <img src="/icons/file_upload.svg" alt="logo">
                </figure>
                <input class="form-control" type="file" id="formFile">
            </div>
        </div>`;

    // Agregar el evento onchange después de cargar el script
    const inputElement = element.querySelector('#formFile');
    inputElement.addEventListener('change', handleFileSelect);
};
