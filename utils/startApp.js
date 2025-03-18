import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import { getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  getOrders(user.uid).then((orders) => showOrderCard(orders));
};

export default startApp;
