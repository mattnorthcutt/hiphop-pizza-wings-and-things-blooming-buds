import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const home = () => {
  clearDom();

  const domString = `<div style="display: flex; flex-direction: column; align-items: center;"id="homePage">
    <h3 style="color: white; margin-bottom: 60px;" class="home-title">Welcome!</h3>
    <button class="btn btn-white" style="background-color: white; color: black; margin-bottom: 60px; width: 220px" type="button" id="home-menu">View Menu</button>
    <button class="btn btn-white" style="background-color: white; color: black; margin-bottom: 60px; width: 220px" type="button" id="home-view">View Orders</button>
    <button class="btn btn-white" style="background-color: white; color: black; margin-bottom: 60px; width: 220px" type="button" id="home-create">Create an Order</button>
    <button class="btn btn-white" style="background-color: white; color: black; margin-bottom: 60px; width: 220px" type="button" id="home-revenue">View Revenue</button>
    </div>
 `;

  renderToDOM('#view', domString);
};

export default home;
