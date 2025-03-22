import {
  createOrderItem,
  getItemsByOrderId,
  getOrderItems,
  getSingleOrderItem,
  updateOrderItem
} from '../api/itemData';
import { getMenuItems, createMenuItems, updateMenuItems } from '../api/menuData';
import { createOrder, updateOrder, getOrders } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import { showOrderItems } from '../pages/orderItemCard';
import { showItemsOnOrder } from '../pages/viewItemsOnOrder';

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
        open: true,
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
        open: true,
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
        sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid: user.uid
      };
      createMenuItems(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateMenuItems(patchPayload).then(() => {
          getMenuItems(user.uid).then(showOrderItems);
        });
      });
    }

    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
        uid: user.uid
      };

      updateOrderItem(payload).then(() => {
        getOrderItems(user.uid).then(showOrderItems);
      });
    }

    if (e.target.id.includes('add-item-on-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        uid: user.uid
      };
      createOrderItem(payload).then(({ name }) => {
        const patchPayload = { orderId: firebaseKey, firebaseKey: name };

        updateOrderItem(patchPayload).then(() => {
          getItemsByOrderId(firebaseKey).then((items) => {
            showItemsOnOrder(items, patchPayload.orderId);
          });
        });
      });
    }

    if (e.target.id.includes('update-item-on-order')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrderItem(firebaseKey).then((item) => {
        const payload = {
          name: document.querySelector('#name').value,
          price: document.querySelector('#price').value,
          sale: document.querySelector('#sale').checked,
          orderId: item.orderId,
          firebaseKey: item.firebaseKey,
          uid: user.uid
        };
        updateOrderItem(payload).then(() => {
          getItemsByOrderId(payload.orderId).then((items) => {
            showItemsOnOrder(items, payload.orderId);
          });
        });
      });
    }
  });
};

export default formEvents;
