import * as ExcelJS from 'exceljs';

export function handleFileSelect(fileInput = false, callback) {
    let file;

    if (fileInput instanceof DataTransfer) {
        // If a DataTransfer object is provided, take the file from the object
        file = fileInput.files[0];
    } else {
        // If a DataTransfer object is not provided, get the file from the INPUT
        file = document.getElementById('formFile').files[0];
    }


    if (file) {
        const allowedExtensions = ['xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

       // Validate the file type
        if (allowedExtensions.indexOf(fileExtension) === -1) {
            alert('Por favor, selecciona un archivo con formato xlsx válido.');
            fileInput.value = ''; // Clear the input value so the user can select another file
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);

            const workbook = new ExcelJS.Workbook();
            workbook.xlsx.load(data).then(function () {
                let sheets = [];
                
                // You can access the sheets and cells of the Excel file here
                workbook.eachSheet(function (worksheet, sheetId) {
                    sheets.push({ sheetId, sheetName: worksheet.name, data: worksheet.getSheetValues() });
                });

                callback(sheets);
            });
        };

        reader.readAsArrayBuffer(file);

        // LOAD SUCCESSFULL
        const imageIdicator = document.querySelector('#labelFile figure img')
        imageIdicator.src = '/icons/file_uploaded.svg'
        document.querySelector('#labelFile h3').textContent = '¡SUCCESS!'

    }
}
