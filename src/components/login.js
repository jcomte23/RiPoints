export const showLogin = (element) => {
  //esa accion no se que tan buena sea, ya que se ejecuta sin validar
  element.innerHTML = `
  <form action="./src/pages/coder/index.html" class="row g-3 card">
          <p class="d-flex align-items-center justify-content-center">
            Iniciar sesión
          </p>
          <div class="col-12">
            <label for="user" class="form-label">Usuario</label>
            <input
              name="user"
              type="text"
              class="form-control"
              id="user"
              required
              placeholder="Ingresa tu usuario"
            />
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
          </div>
          <div id="btnsRol">
            <input
              value="coder"
              type="radio"
              class="btn-check"
              name="options"
              id="btn-coder"
              autocomplete="off"
            />
            <label class="btn" for="btn-coder">Coder</label>

            <input
              value="trainer"
              type="radio"
              class="btn-check"
              name="options"
              id="btn-trainer"
              autocomplete="off"
            />
            <label class="btn" for="btn-trainer">Trainer</label>
            
            <input
              value="admin"
              type="radio"
              class="btn-check"
              name="options"
              id="btn-Admin"
              autocomplete="off"
            />
            <label class="btn" for="btn-Admin">Admin</label>
          </div>
          <div class="col-12 d-flex justify-content-center mb-lg-4">
            <button id="btn-login" type="submit" class="btn btn-primary w-75">Iniciar sesión</button>
          </div>
        </form>
  `;
}