import { createOrder, updateOrder } from '../api/orderData';

const formEvents = (user) => {
  document.querySelector('#main-containter').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#name').value,
        phone: document.querySelector('#phone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        status: 'Open',
        firebaseKey,
        uid: user.uid
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          // getOrders().then(showOrder);
        });
      });
    }
  });
};

export default formEvents;
