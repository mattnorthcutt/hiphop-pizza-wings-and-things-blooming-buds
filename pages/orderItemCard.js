import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrderItems = () => {
  const domString = '<h1>No Items</h1>';
  renderToDOM('#store', domString);
};

const showOrderItems = (array) => {
  clearDom();
  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-item-btn">Add An Item</button>';
  renderToDOM('#view', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `\
    <div class="card" style="width: 18rem;">
  <img src="${item.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${item.name}.</p>
    <p class="card-text bold">$${item.price}</p>
    <div id='card-btns'>
     <i id="edit-orderItem-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
            <i id="delete-orderItem-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
            </div>
  </div>
</div>
    `;
  });
  renderToDOM('#store', domString);
};

export { emptyOrderItems, showOrderItems };
