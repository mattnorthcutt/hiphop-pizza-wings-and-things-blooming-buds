import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const payForm = (obj = {}) => {
  clearDom();

  const payString = `
  <form id="${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : `submit-payment--${obj.firebaseKey}`}" class="mb-4">
      <div class="form-group">
        <label for="payment-type">Payment Type</label>
        <select class="form-control" id="payment-type" name="payment-type" required>
          <option value="${obj.payment_type || ''}" required disabled selected>Select a payment type</option>
          <option value="Payment: Cash">Cash</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
          <option value="Mobile">Mobile</option>
        </select>
      </div>      
      <div class="form-group">
      <label for="tip-amount">Tip Amount</label>
      <input type="number" min="0" step="0.01" class="form-control" id="tip-amount" placeholder="Enter Tip Amount Here." value="${obj.tip_amount || ''}" required>
    </div>
      <button type="submit" id="close-order-btn" class="btn btn-primary form-btn">Close Order</button>
    </form>
  `;

  renderToDOM('#form-container', payString);
};

export default payForm;
