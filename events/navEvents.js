import { signOut } from '../utils/auth';
import addOrderForm from '../components/forms/addOrderForm';
import home from '../pages/home';
import { getOrders } from '../api/orderData';
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
    getOrders(user.uid).then((orders) => showOrderCard(orders));
  });
};

export default navEvents;
