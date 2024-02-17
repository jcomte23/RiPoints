import Swal from 'sweetalert2'

const getLanguage = () => {
    let language = localStorage.getItem("lang")
    if (language === null || language === undefined) {
        language = "en"
    }
    return language
}

export function smallAlertError(messageEN, messageES) {
    const language = getLanguage()
    if (language === "en") {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: `${messageEN}`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    } else {
        Swal.fire({
            toast: true,
            position: "top-end",
            icon: "error",
            title: `${messageES}`,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        })
    }

}

export function smallAlertSuccess(message) {
    Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: `${message}`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
    });
}