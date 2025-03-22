import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="orderType"></label>
        <select id="orderType" style="width: 600px; text-align: center; border-radius: 5px; margin-bottom: 10px;" class="mt-3" required>
          <option value="select">Select an Order Type</option>
          <option value="Phone">Phone</option>
          <option value="In-Person">In-Person</option>
        </select>
      </div>
      <div class="form-group">
        <label style="color: black; margin-bottom: 5px;" for="title">Order Name</label>
        <input type="text" style=" " class="form-control" id="name" aria-describedby="orderName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label style="color: black; margin-top: 10px; margin-bottom: 5px;" for="phone">Customer Phone Number</label>
        <textarea class="form-control" style="height: 150px;" placeholder="Enter Phone Number" id="phone" >${obj.phoneNum || ''}</textarea>
      </div>
      <div class="form-group">
        <label style="color: black; margin-top: 10px; margin-bottom: 5px;" for="phone">Customer Email</label>
        <textarea class="form-control" style="height: 150px;" placeholder="Enter Email" id="email" >${obj.email || ''}</textarea>
      </div>
      <button class="mt-2" style="color: black; border-radius: 5px;"type="submit" class="btn btn-primary">Create Order
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addOrderForm;
