import { createOrderItem, getOrderItems, updateOrderItem } from '../api/itemData';
import { createOrder, updateOrder, getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import { showOrderItems } from '../pages/orderItemCard';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phoneNum: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        orderItem_id: [],
        status: 'Open',
        firebaseKey,
        uid: user.uid
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders(user.uid).then(showOrderCard);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phoneNum: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        orderItem_id: [],
        status: 'Open',
        firebaseKey,
        uid: user.uid
      };

      updateOrder(payload).then(() => {
        getOrders(user.uid).then(showOrderCard);
      });
    }

    if (e.target.id.includes('submit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        email: document.querySelector('#image').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid: user.uid
      };
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrderItem(patchPayload).then(() => {
          getOrderItems(user.uid).then(showOrderItems);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        email: document.querySelector('#image').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid: user.uid
      };

      updateOrderItem(payload).then(() => {
        getOrderItems(user.uid).then(showOrderItems);
      });
    }
  });
};

export default formEvents;
