import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderItemForm = (obj = {}) => {
  clearDom();

  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label style="color: white; margin-bottom: 5px;" for="title">Food/Item Name</label>
        <input type="text" style=" " class="form-control" id="name" aria-describedby="orderItemName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label style="color: white; margin-top: 10px; margin-bottom: 5px;" for="price">Price</label>
        <textarea class="form-control" style="height: 150px;" placeholder="Enter Price" id="price" >${obj.price || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="image">Food Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" value="${obj.image || ''}" required>
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale" ${obj.sale ? 'checked' : ''}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button class="mt-2" style="color: black; border-radius: 5px;"type="submit" class="btn btn-primary">Create Item/Food
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderItemForm;
