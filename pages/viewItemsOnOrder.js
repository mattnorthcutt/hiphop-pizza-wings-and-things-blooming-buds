import { getSingleOrder } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyItemsOnOrder = (firebaseKey) => {
  clearDom();

  const domString = `
  <div id="addItemsForOrder">
  <h1 style="color: white; font-size: 100px; margin-bottom: 250px;"id="nothing">No Items</h1>
    <button class="add-item-for-order-btn" id="add-item-for-order-btn--${firebaseKey}">Add Item</button>
  </div>
  `;
  renderToDOM('#itemsForOrder', domString);
};

const showItemsOnOrder = (array, firebaseKey) => {
  clearDom();

  let subTotal = 0;

  array.forEach((item) => {
    const price = Number(item.price);
    subTotal += price;
  });

  const trueTotal = subTotal.toFixed(2);

  let domString = `
    <div id="subTotal-container">
      <p class="sub-total">TOTAL: $${trueTotal}</p>
    </div>
  `;

  getSingleOrder(firebaseKey).then((order) => {
    if (order.open === true) {
      array.forEach((item) => {
        domString += `
          <div style="width: 700px; margin-bottom: 10px; " class="card orderItem-card">
            <div class="card-body">
              <h3 class="card-title card-item-name">${item.name}</h3>
            <p>${item.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
            $${item.price}` : `$${item.price}`}</p>
            <i class="btn" style="color: rgb(0, 110, 236)" id="edit-item-on-order-btn--${item.firebaseKey}">Edit item</i>
              <i class="btn" style="color: red" id="delete-item-on-order-btn--${item.firebaseKey}">Delete item</i>
            </div>
          </div>
        `;
      });

      domString += `
      </div>
      <div id="item-page-button-container">
        <button class="add-item-for-order-btn" id="add-item-for-order-btn--${firebaseKey}">Add Item</button>
        <button class="to-payment-btn" id="to-payment-btn--${firebaseKey}">Payment</button>
      </div>
    </div>
`;
    } else {
      array.forEach((item) => {
        domString += `
        <div style="width: 700px; margin-bottom: 10px;" class="card item-card">
          <div class="card-body">
            <h3 class="card-title card-item-name">${item.name}</h3>
            <p>${item.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
            $${item.price}` : `$${item.price}`}</p>
          </div>
        </div>
        `;
      });
    }
    renderToDOM('#itemsForOrder', domString);
  });
};

export { emptyItemsOnOrder, showItemsOnOrder };
