import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
// import { getOrders } from '../api/orderData';
// import { showOrderCard } from '../pages/orderCard';
import home from '../pages/home';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navEvents(user);
  formEvents(user);
  domEvents(user);
  // getOrders(user.uid).then((orders) => showOrderCard(orders));
  home(user);
};

export default startApp;
