import addOrderForm from '../components/forms/addOrderForm';
import { getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import { getOrderItems } from '../api/itemData';
import { showOrderItems } from '../pages/orderItemCard';
import addOrderItemForm from '../components/forms/addOrderItemForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create')) {
      addOrderForm({}, user);
    }

    if (e.target.id.includes('home-view')) {
      getOrders(user.uid).then((orders) => showOrderCard(orders));
    }

    if (e.target.id.includes('home-menu')) {
      getOrderItems(user.uid).then((orderItems) => showOrderItems(orderItems));
    }

    if (e.target.id.includes('add-item-btn')) {
      addOrderItemForm({}, user);
    }
  });
};

export default domEvents;
