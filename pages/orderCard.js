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
    if (item.open === true) {
      domString += `
      <div class="card" style="color: white; margin: 8px; margin-bottom: 20px; display: flex; background-color:rgb(57, 62, 66)">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.orderType}</p>
          <p class="card-text card-order-status">Order Status: <span style="color: green">Open</span></p>
          <p class="card-text">${item.phoneNum}</p>
          <p class="card-text">${item.email}</p>
          <i class="btn fas" style="color: lightblue;" id="view-order-btn--${item.firebaseKey}">View</i>
          <i id="edit-order-btn--${item.firebaseKey}" class="fas btn" style="color: lightblue;">Edit</i>
          <i id="delete-order-btn--${item.firebaseKey}" class="btn fas" style="color: lightblue;">Delete</i>
        </div>
      </div>
      `;
    } else {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.orderType}</p>
          <p class="card-text card-order-status">Order Status: <span style="color: green">Close</span></p>
          <p class="card-text">${item.phoneNum}</p>
          <p class="card-text">${item.email}</p>
          <i class="btn btn-success fas fa-eye" id="view-order-btn--${item.firebaseKey}"></i>
          <i id="edit-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-order-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        </div>
      </div>
      `;
    }
  });
  renderToDOM('#store', domString);
};
export { showOrderCard, emptyOrders };
