export const showLogin = (element) => {
  //esa accion no se que tan buena sea, ya que se ejecuta sin validar
  element.innerHTML = `
  <form class="row g-3 card needs-validation p-4 d-flex flex-column" id="form" novalidate>
          <p class="d-flex align-items-center justify-content-center display-3" id="login">
            Iniciar sesión
          </p>
          <div class="col-12">
            <label for="user" class="form-label">Usuario</label>
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
          <div class="col-12">
            <label for="password" class="form-label">Contraseña</label>
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
          <div id="validationAccount" class="d-block w-100"></div>
          <div class="col-12 d-flex justify-content-center mb-lg-4">
            <button id="btn-login" type="submit" class="btn btn-primary w-100">Iniciar sesión</button>
          </div>
        </form>
  `;
}