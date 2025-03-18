import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="store"></div>
  <div id="view"></div>
  <div id="form-container"></div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
