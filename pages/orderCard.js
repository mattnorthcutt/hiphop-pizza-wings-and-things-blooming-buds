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
    <h6 class="card-text">${item.orderType}</h6>
    <p class="card-text bold">${item.status}</p>
    <p class="card-text">${item.phoneNum}</p>
    <p class="card-text">${item.email}</p>
     <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}">Details</i>
       <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
      <i id="delete-order-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
  </div>
</div>
    `;
  });
  renderToDOM('#store', domString);
};

export { showOrderCard, emptyOrders };
