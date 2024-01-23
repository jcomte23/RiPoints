const sideNav = () => {
    const nav = document.querySelector(".side-nav");

    nav.innerHTML = `
    
    <figure>
        <img
            src="/img/img_globales/rlogo-r-white.svg"
            alt="Logo riwi R"
        />
    </figure>

    <ul class="container__links">
        <li>
            <img src="/icons/dashboard-icon.svg" alt="dashboard-icon" />
            Dashbard
        </li>
        <li>
            <img src="/icons/clanes-icon.svg" alt="" />
            Clanes
        </li>
        <li>
            <img src="/icons/coder-icon.svg" alt="" />
            Coders
        </li>
    </ul>
    
    `;
};

sideNav();
