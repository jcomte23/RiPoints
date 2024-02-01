import i18next from 'i18next';
import Backend from 'i18next-http-backend';

let language

if (localStorage.getItem("lang")) {
    language=localStorage.getItem("lang")
}else{
    language="en"
}

i18next.use(Backend).init(
    {
        lng: language,
        debug: true,
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        },
        ns: ['translation'],
        defaultNS: 'translation',
    }
).then(() => updateContent());


function updateContent() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = i18next.t(key);
    });
}

window.changeLanguage = function (lng) {
    i18next.changeLanguage(lng, updateContent);
    localStorage.setItem("lang",lng)
};