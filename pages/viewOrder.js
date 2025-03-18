import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-order-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-order--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.name}</h5>
     Email<a href="mailto:${obj.email}">${obj.email}</a>
     <p>${obj.phoneNum || ''}</p>
     <p>${obj.orderType || ''}</p>
     <hr>
     <p>${obj.status ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i>${obj.status}</span> 
       ${obj.status}` : `$${obj.status}`}</p>      
      </div>
    </div>`;

  renderToDOM('#view', domString);
};

export default viewOrder;
