export const showLogin = (element) => {
  element.innerHTML = `
  <form action="./src/pages/coder/index.html" class="row g-3 card">
          <p class="d-flex align-items-center justify-content-center">
            Iniciar sesión
          </p>
          <div class="col-12">
            <label for="user" class="form-label">Usuario</label>
            <input
              type="text"
              class="form-control"
              id="user"
              placeholder="Ingresa tu usuario"
            />
          </div>
          <div class="col-12">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div id="btnsRol">
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="btn-coder"
              autocomplete="off"
              checked
            />
            <label class="btn" for="btn-coder">Coder</label>

            <input
              type="radio"
              class="btn-check"
              name="options"
              id="btn-trainer"
              autocomplete="off"
            />
            <label class="btn" for="btn-trainer">Trainer</label>
            
            <input
              type="radio"
              class="btn-check"
              name="options"
              id="btn-Admin"
              autocomplete="off"
              checked
            />
            <label class="btn" for="btn-Admin">Admin</label>
          </div>
          <div class="col-12 d-flex justify-content-center mb-lg-4">
            <button id="btn-login" type="submit" class="btn btn-primary w-75">Iniciar sesión</button>
          </div>
        </form>
  `;
}