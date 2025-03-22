import { signIn } from '../utils/auth';
import renderToDOM from '../utils/renderToDom';

// GOOGLE LOGIN BUTTON
const login = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
    <div class="login-container" style="height: 100%;">
      <div class="login-card">
        <p class=loginMsg" style="color: #5c0000; font-size: 30px;">Click the Logo to Login!</p>
        <button id="google-auth" class="google-sign-in-btn" style="border-radius: 150px; background-color: black;"><img style ="width: 300px; height:300px;"src="https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png" alt="login">
        </button>
      </div>
    </div>
    `;

  renderToDOM('#app', domString);

  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default login;
