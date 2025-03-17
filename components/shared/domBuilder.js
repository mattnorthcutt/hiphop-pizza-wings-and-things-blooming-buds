import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
