import * as ExcelJS from 'exceljs';

export function handleFileSelect() {
    const fileInput = document.getElementById('formFile');
    const file = fileInput.files[0];

    if (file) {
        const allowedExtensions = ['xlsx'];
        const fileExtension = file.name.split('.').pop().toLowerCase();

        // Validar el tipo de archivo
        if (allowedExtensions.indexOf(fileExtension) === -1) {
            alert('Por favor, selecciona un archivo con formato xlsx válido.');
            fileInput.value = ''; // Limpiar el valor del input para que el usuario pueda seleccionar otro archivo
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);

            const workbook = new ExcelJS.Workbook();
            workbook.xlsx.load(data).then(function () {
                // Aquí puedes acceder a las hojas y celdas del archivo Excel
                workbook.eachSheet(function (worksheet, sheetId) {
                    console.log('Hoja:', sheetId);
                    console.log(worksheet.getSheetValues());
                });
            });
        };

        reader.readAsArrayBuffer(file);
    }
}
