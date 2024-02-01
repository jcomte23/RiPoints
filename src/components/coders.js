export function showCoders(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    element.innerHTML = `
    <form class="d-flex form-control flex-column form-coders">
       <h2 data-i18n="developers" ></h2>
       <input class="my-2 search" type="text" name="" id="searchKeywords" placeholder="Search" />
       <div class="dates d-flex flex-row gap-4 py-3 w-75 align-items-center">
           <label for="dateStart">Desde:</label>
           <input type="date" name="" id="dateStart" />
           <label for="dateEnd">Hasta:</label>
           <input type="date" name="" id="dateEnd" />
       </div>

    <table id="myTable" class="table mt-3">
        <thead>
            <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Clan</th>
            <th>Puntos</th>
            <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>John Clarsk</td>
            <td>Doe Danilton</td>
            <td>Lovelace</td>
            <td>100</td>
            <td><button class="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
            </tr>
            <tr>
            <td>Jane Janie</td>
            <td>Smith Perfonson</td>
            <td>Meta</td>
            <td>75</td>
            <td><button class="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
            </tr>
            <tr>
            <td>Bob Jainc</td>
            <td>Johnson Tomson</td>
            <td>Meta</td>
            <td>120</td>
            <td><button class="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button></td>
            </tr>
        </tbody>
    </table>

    </form> 

    
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          <div class="title__text">
            <h2 id="codeR">Codigo </h2><img src="/public/img/img_desktop/r-logo.svg" alt="">
          </div>
          
          <div class="information__coder">
            <div class="name">
              <h4>Nombre:</h4>
              <div class="center__text">
                <h4 class="center__text">pepito maximilano</h4>
              </div>
            </div>
            <div class="last__name">
              <h4 for="lastname">Apellido:</h4>
              <div class="center__text">
                <h4 class="center__text">contreras ramirez</h4>
              </div>
            </div>
            <div class="clan">
              <h4 for="clan">Clan:</h4>
              <div class="center__text">
                <h4>Meta</h4>
              </div>
            </div>
          </div>
          
          <div class="container__profile">
            <div class="profile__imgs">
              <div class="coder__profile__table profile__danger">
                <div class="coder__profile__clan__table profile__danger"></div>
              </div>
            </div>
            
            <div class="container__points">
              <div class="total__points" id="totalPoints">12</div>
              <span id="plusSign">+</span>
              <input class="asignador__points" type="number" id="numberInput" value="0" min="0">
            </div>
          </div>
          
          <div class="container__area">
            <textarea placeholder="observaciones" id="observations" name="observations"></textarea>
                    </div>
          
          <div class="btn_actions m-5 ">
            <button class="btn__delete btn btn-danger btn-lg col-md-5 m-1" id="save-modal">Cancelar</button>
            <button class="btn btn-success btn-lg col-md-5 m-1" id="save-modal">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;

    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
    });

 
}
