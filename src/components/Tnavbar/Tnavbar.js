import main from './templates/main.html';
import Tlanguage from '../Tlanguage/Tlanguage';
import Tbutton from '../Tbutton/Tbutton';

function tnavbar() {
  const rootElement = document.createElement('nav');
  const languages = [
    { value: 'EN', id: '1', default: true },
    { value: 'RU', id: '2', default: false },
    { value: 'UK', id: '3', default: false },
    { value: 'CZ', id: '4', default: false },
  ];

  rootElement.classList.add('tnavbar');
  rootElement.insertAdjacentHTML('afterbegin', main);
  rootElement
    .querySelector('[data-type="language"]')
    .append(Tlanguage(languages));

  const signIn = rootElement.querySelector('[data-type="sign-in"]');

  signIn.append(Tbutton(signIn, 'SIGN IN FOR FREE'));

  const collapse = rootElement.querySelector('[data-type="collapse"]');
  const toggler = rootElement.querySelector('[data-type="toggler"]');

  toggler.addEventListener('click', clickHandler, false);

  function clickHandler() {
    collapse.classList.toggle('tnavbar__collapse_open');
  }

  return rootElement;
}

export default tnavbar;
