import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};

const showOrderCard = (array) => {
  clearDom();
  // const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  // renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text bold">${item.status ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Status</span> $${item.status}` : `$${item.status}`}</p>
    <p class="card-text">{${item.phoneNum}}</p>
     <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}"></i>
            <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-order-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>
    `;
  });
  renderToDOM('#view', domString);
};

export { showOrderCard, emptyOrders };
