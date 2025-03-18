import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button href="login" id="google-auth" class="btn glogin">GOOGLE LOGIN</button>';
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
