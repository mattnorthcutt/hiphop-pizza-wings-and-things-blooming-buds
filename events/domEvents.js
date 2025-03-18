import addOrderForm from '../components/forms/addOrderForm';
import { deleteOrder, getOrders, getSingleOrder } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import { getOrderItems } from '../api/itemData';
import { showOrderItems } from '../pages/orderItemCard';
import addOrderItemForm from '../components/forms/addOrderItemForm';
import getOrderDetails from '../api/mergedData';
import viewOrder from '../pages/viewOrder';

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
      if (e.target.id.includes('edit-order-btn')) {
        const [, firebaseKey] = e.target.id.split('--');

        getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
      }
      if (e.target.id.includes('delete-order')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrderCard);
        });
      }
      if (e.target.id.includes('view-order-btn')) {
        const [, firebaseKey] = e.target.id.split('--');
        getOrderDetails(firebaseKey).then(viewOrder);
      }
    }
  });
};

export default domEvents;
