import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderItemForm = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label style="color: black; margin-bottom: 5px;" for="title">Order Name</label>
        <input type="text" style=" " class="form-control" id="name" aria-describedby="orderItemName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label style="color: black; margin-top: 10px; margin-bottom: 5px;" for="phone">Price</label>
        <textarea class="form-control" style="height: 150px;" placeholder="Enter Price" id="phone" >${obj.price || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Food Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button class="mt-2" style="color: black; border-radius: 5px;"type="submit" class="btn btn-primary">Create Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderItemForm;
