import addOrderForm from '../components/forms/addOrderForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('createOrderBtn')) {
      addOrderForm({}, user);
    }
  });
};

export default domEvents;
