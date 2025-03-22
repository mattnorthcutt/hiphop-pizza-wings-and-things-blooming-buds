import { signOut } from '../utils/auth';
import addOrderForm from '../components/forms/addOrderForm';
import home from '../pages/home';
import { getOpenOrders, searchOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';

const navEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm({}, user);
  });
  document.querySelector('#homeBtn').addEventListener('click', () => {
    home();
  });
  document.querySelector('#all-orders').addEventListener('click', () => {
    getOpenOrders(user.uid).then((orders) => showOrderCard(orders));
  });
  document.querySelector('#search').addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      searchOrders(user);
      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
