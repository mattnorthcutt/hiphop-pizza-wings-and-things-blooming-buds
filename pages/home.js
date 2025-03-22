import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';
import { getUser } from '../utils/auth';

const home = () => {
  clearDom();

  const user = getUser();

  const domString = `<div style="display: flex; flex-direction: column; align-items: center;"id="homePage">
    <h3 style="color: white; margin-bottom: 60px;" class="home-title">WELCOME, ${user.toLocaleUpperCase()}! </h3>
    <button class="btn VM" style="color: white; margin-bottom: 60px; width: 220px" type="button" id="home-menu">View Menu</button>
    <button class="btn VO" style="color: white; margin-bottom: 60px; width: 220px" type="button" id="home-view">View Orders</button>
    <button class="btn CaO" style="color: white; margin-bottom: 60px; width: 220px" type="button" id="home-create">Create an Order</button>
    <button class="btn VR" style="color: black; margin-bottom: 60px; width: 220px" type="button" id="home-revenue">View Revenue</button>
    </div>
 `;

  renderToDOM('#view', domString);
};

export default home;
