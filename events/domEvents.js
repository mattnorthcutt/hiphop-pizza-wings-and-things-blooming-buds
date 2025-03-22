import addOrderForm from '../components/forms/addOrderForm';
import { deleteOrder, getOrders, getSingleOrder } from '../api/orderData';
import { showOrderCard } from '../pages/orderCard';
import {
  deleteOrderItem,
  getItemsByOrderId,
  getSingleOrderItem
} from '../api/itemData';
import { showOrderItems } from '../pages/orderItemCard';
import addOrderItemForm from '../components/forms/addOrderItemForm';
import { emptyItemsOnOrder, showItemsOnOrder } from '../pages/viewItemsOnOrder';
import { addItemOnOrderForm, updateItemOnOrderForm } from '../components/forms/addItemOnOrderForm';
import { deleteMenuItem, getMenuItems, getSingleMenuItem } from '../api/menuData';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('home-create')) {
      addOrderForm({}, user);
    }

    if (e.target.id.includes('home-view')) {
      getOrders(user.uid).then((orders) => showOrderCard(orders));
    }

    if (e.target.id.includes('home-menu')) {
      getMenuItems(user.uid).then((menuItems) => showOrderItems(menuItems));
    }

    if (e.target.id.includes('add-item-btn')) {
      addOrderItemForm({}, user);
    }

    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj, user));
    }

    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getItemsByOrderId(firebaseKey).then((item) => {
        if (item.length < 1) {
          emptyItemsOnOrder(firebaseKey);
        } else {
          showItemsOnOrder(item, firebaseKey);
        }
      });
    }

    if (e.target.id.includes('delete-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getOrders(user.uid).then(showOrderCard);
      });
    }

    if (e.target.id.includes('edit-itemOrder-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleMenuItem(firebaseKey).then((menuItemObj) => addOrderItemForm(menuItemObj, user));
    }

    if (e.target.id.includes('delete-itemOrder-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteMenuItem(firebaseKey).then(() => {
        getMenuItems(user.uid).then(showOrderItems);
      });
    }

    if (e.target.id.includes('add-item-for-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItemOnOrderForm(firebaseKey);
    }

    if (e.target.id.includes('edit-item-on-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrderItem(firebaseKey).then((item) => {
        updateItemOnOrderForm(item);
      });
    }

    if (e.target.id.includes('delete-item-on-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrderItem(firebaseKey).then((item) => {
        deleteOrderItem(firebaseKey).then(() => {
          getItemsByOrderId(item.orderId).then((items) => {
            if (items.length < 1) {
              emptyItemsOnOrder(item.orderId);
            } else {
              showItemsOnOrder(items, item.orderId);
            }
          });
        });
      });
    }
  });
};

export default domEvents;
