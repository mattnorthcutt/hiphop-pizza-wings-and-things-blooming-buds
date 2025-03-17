import renderToDOM from '../../utils/renderToDom';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
        <a class="navbar-brand title" href="#"></a>
        <button id="homeBtn" class="navbar-toggler" type="button" aria-label="Home"
            style="border: none; background: transparent; padding: 0; cursor: pointer; display: block;">
            <img src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="Home" 
                style="display: block; width: 50px; height: auto; margin-right: 10px;"/>
        </button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#" id="all-orders"> All Orders <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="create-order">Create An Order</a>
            </li>
            <li>
            <input 
              class="form-control mr-sm-2" 
              id="search" 
              placeholder="Search Orders" 
              aria-label="Search"
            />
            </li>
          </ul>
          <span class="navbar-text">
            <div id="cart-button"></div>
            <div id="add-link"></div>
            <div id="logout-button"></div> 
          </span>
        </div>
        </div>
      </nav>`;

  renderToDOM('#navbar', domString);
};

export default navBar;
