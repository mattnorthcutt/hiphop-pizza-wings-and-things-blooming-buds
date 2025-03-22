import { deleteOrder, getItemsForOrder } from './orderData';
import { deleteOrderItem } from './itemData';

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getItemsForOrder(firebaseKey).then((orderItemsArray) => {
    const deleteItemPromises = orderItemsArray.map((item) => deleteOrderItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});

export default deleteOrderItemsRelationship;
