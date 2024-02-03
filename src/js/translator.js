import i18next from "i18next";
import Backend from "i18next-http-backend";

export function getLanguague() {
  if (localStorage.getItem("lang")) {
    return localStorage.getItem("lang");
  } else {
    return "en";
  }
}

let language = getLanguague();

i18next
  .use(Backend)
  .init({
    lng: language,
    debug: true,
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: ["translation"],
    defaultNS: "translation",
  })
  .then(() => updateContent());

export function updateContent() {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = i18next.t(key);
  });
}

window.changeLanguage = function (lng) {
  i18next.changeLanguage(lng, updateContent);
  localStorage.setItem("lang", lng);
};


export function changeLanguageOnClick() {
  function handleLanguageChange(newLanguage) {
    changeLanguage(newLanguage);

    const langFlag = document.querySelector(".lang--flag");
    const btnChangeLanguage = document.querySelector(".menu__header--lang");

    btnChangeLanguage.querySelector("h4").innerText = newLanguage.toUpperCase();

    if (newLanguage === "es") {
      langFlag.classList.add("es");
    } else {
      langFlag.classList.remove("es");
    }

    language = newLanguage;
  }

  document.addEventListener("click", (event) => {
    const target = event.target;

  
    if (target.classList.contains("menu__header--lang")) {
      const newLanguage = language === "en" ? "es" : "en";
      handleLanguageChange(newLanguage);
    }
  });
}
