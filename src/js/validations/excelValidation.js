import * as ExcelJS from 'exceljs';

const allowedExtensions = ['xlsx'];

export function handleFileSelect(fileInput = false, callback) {

    console.log(fileInput)

    function processFiles(files, callback) {
        // Iterate over each file in the list
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            handleSingleFile(file, callback);
        }
    }

    // If a DataTransfer object is provided, take the file from the object
    if (fileInput.dataTransfer) {
        const files = fileInput.dataTransfer.files;
        processFiles(files,callback)
        
    } else {
        // If a DataTransfer object is not provided, get the file from the INPUT
        const files = fileInput.target.files;
        console.log('Processing file:', files);
        processFiles(files, callback);
        
    }
}

function handleSingleFile(file, callback) {
    if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();

       // Validate the file type
        if (allowedExtensions.indexOf(fileExtension) === -1) {
            alert('Por favor, selecciona un archivo con formato xlsx válido.');
            fileInput.value = ''; // Clear the input value so the user can select another file
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            try{
                const data = new Uint8Array(e.target.result);
    
                const workbook = new ExcelJS.Workbook();
                workbook.xlsx.load(data).then(function () {
                    let sheets = [];
                    
                    // You can access the sheets and cells of the Excel file here
                    workbook.eachSheet(function (worksheet, sheetId) {
                        sheets.push({ sheetId, sheetName: worksheet.name, data: worksheet.getSheetValues() });
                    });
    
                    callback(sheets);
                    
                    // LOAD SUCCESSFULL
                    const imageIdicator = document.querySelector('#labelFile figure img')
                    imageIdicator.src = '/icons/file_uploaded.svg'
                    document.querySelector('#labelFile h3').textContent = '¡SUCCESS!'
                });

            }catch{
                console.error('Error loading the file:', error);
                alert('There was an error loading the file. Make sure it is a valid Excel file.');
            }
        };
        // converting format
        reader.readAsArrayBuffer(file);

    }
}
