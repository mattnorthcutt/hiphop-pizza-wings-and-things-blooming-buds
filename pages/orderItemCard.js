import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrderItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#menuItems', domString);
};

const showOrderItems = (array) => {
  clearDom();

  const btnString = `
    <div id="menu-page-add-item" style="margin-bottom: 10px; width: 100px; ">
      <button class="add-item-btn"style="width: 100px;"id="add-item-btn">Add Item</button>
    </div>`;

  let domString = '';

  array.forEach((item) => {
    domString += `
    <div class="card orderItem-card" style="background-image: ${item.image}; width: 700px; margin-bottom: 10px;">
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

  const tgthrString = (domString + btnString);
  renderToDOM('#menuItems', tgthrString);
};

export { emptyOrderItems, showOrderItems };
