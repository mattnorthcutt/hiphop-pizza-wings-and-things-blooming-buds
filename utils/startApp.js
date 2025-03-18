import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navEvents(user);
  formEvents(user);
  getOrders(user.uid).then((orders) => showOrderCard(orders));
};

export default startApp;
