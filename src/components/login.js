export const showLogin = (element) => {
  //esa accion no se que tan buena sea, ya que se ejecuta sin validar
  element.innerHTML = `
  <form class="card needs-validation" id="form" novalidate>
        <p id="login" data-i18n="login_title"></p>
          <div class='container__inputs'>
            <div class="col-12 d-flex flex-column align-items-start p-2 ">
              <label for="user" class="form-label text-capitalize" data-i18n="user"></label>
              <input
                name="userName"
                type="text"
                class="form-control"
                id="user"
                required
                placeholder="Ingresa tu usuario"
              />
              <div class="invalid-feedback">
                Este campo es obligatorio
              </div>
            </div>

            <div class="col-12 d-flex flex-column align-items-start p-2 ">
              <label for="password" class="form-label text-capitalize" data-i18n="password"></label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="password"
                required
                placeholder="Ingresa tu contraseña"
              />
              <div class="invalid-feedback">
                Este campo es obligatorio
              </div>
            </div>

              <div id="validationAccount"></div>
        </div>
         
          <div class="col-12 d-flex justify-content-center mb-lg-4">
            <button id="btn-login" type="submit" class="btn btn-primary w-100" data-i18n="login">Iniciar sesión</button>
          </div>
        </form>
  `;
};
