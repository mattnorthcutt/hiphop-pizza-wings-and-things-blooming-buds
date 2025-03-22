import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="menuItems"></div>
    <div id="store"></div>
    <div id="itemsForOrder"></div>
    <div id="view"></div>
    <div id="add-button"></div>
  </div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
