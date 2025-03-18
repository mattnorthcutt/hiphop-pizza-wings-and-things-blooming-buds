import { signOut } from '../utils/auth';
import addOrderForm from '../components/forms/addOrderForm';

const navEvents = (user) => {
  document.querySelector('#logout-button').addEventListener('click', signOut);

  document.querySelector('#create-order').addEventListener('click', () => {
    addOrderForm({}, user);
  });
};

export default navEvents;
