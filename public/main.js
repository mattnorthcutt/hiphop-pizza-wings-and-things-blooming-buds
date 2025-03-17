// USE WITH FIREBASE AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href === '#') {
    document.body.style.backgroundImage = "url('https://user-images.githubusercontent.com/29741570/205346767-a182560c-64a6-4cfa-80b3-0d64cf998242.png')";
  }
});

const init = () => {
  ViewDirectorBasedOnUserAuthStatus();
};

init();
