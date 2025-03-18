import addOrderForm from '../components/forms/addOrderForm';
import { getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create')) {
      addOrderForm({}, user);
    }

    if (e.target.id.includes('home-view')) {
      getOrders(user.uid).then((orders) => showOrderCard(orders));
    }
  });
};

export default domEvents;
