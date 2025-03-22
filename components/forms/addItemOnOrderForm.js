import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemOnOrderForm = (firebaseKey) => {
  clearDom();
  const domString = `
    <form id="add-item-on-order--${firebaseKey}" class="mb-4">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter item Name"}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="number" min="0" step="0.01" class="form-control" id="price" aria-describedby="price" placeholder="Price?" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale">
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" class="btn btn-success add-update-item-btn">Add item</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

// UPDATE ITEM FORM
const updateItemOnOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="update-item-on-order--${obj.firebaseKey}" class="mb-4">
      <div class="form-group">
        <label for="name">Item Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Enter item Name" value="${obj.name}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="number" min="0" step="0.01" class="form-control" id="price" aria-describedby="item_price" placeholder="Whats the Price?" value="${obj.price}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" class="btn btn-success form-btn">Edit item
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export { addItemOnOrderForm, updateItemOnOrderForm };
