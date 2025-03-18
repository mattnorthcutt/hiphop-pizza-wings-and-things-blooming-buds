import { getSingleOrder } from './orderData';
import { getSingleOrderItem } from './itemData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getSingleOrderItem(orderObject.orderItem_id)
      .then((orderItemObject) => resolve({ ...orderObject, orderItemObject }));
  }).catch(reject);
});

export default getOrderDetails;
