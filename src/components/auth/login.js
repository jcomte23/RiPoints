export const showLogin = (element) => {
  element.innerHTML = 
  `
  <div class="position-relative">
    <span class="position-absolute span_lang lang_en top-0 fs-3 z-3 end-0 text-body-secondary"
        onclick="changeLanguage('en')">EN</span>
    <span class="position-absolute span_lang lang_es top-0 fs-3 z-3 end-0 text-body-secondary"
        onclick="changeLanguage('es')">ES</span>
  </div>

  <form class="card needs-validation d-flex flex-column justify-content-center align-items-center rounded-5 px-4 py-5 m-0 " id="form" novalidate>
    <div class='d-flex flex-column col-xxl-11 align-items-start gap-3 '>
      <div class="col-12">
        <label for="user" class="form-label text-capitalize" data-i18n="user">user</label>
        <input name="userName" type="text" class="form-control " id="user" required />
      </div>
      <div class="col-12">
        <label for="password" class="form-label text-capitalize" data-i18n="password">password</label>
        <input name="password" type="password" class="form-control" id="password" required />
      </div>
      <button id="btn-login" type="submit" class="btn btn-primary h-50 mt-4 w-100  text-capitalize"
      data-i18n="login">login</button>
    </div>
  </form>
  `
}
