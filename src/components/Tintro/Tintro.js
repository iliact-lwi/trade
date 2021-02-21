import main from './templates/main.html';
import Tbutton from '../Tbutton/Tbutton';

function tintro() {
  const rootElement = document.createElement('div');

  rootElement.classList.add('tintro');
  rootElement.insertAdjacentHTML('afterbegin', main);

  const start = rootElement.querySelector('[data-type="start"]');

  start.append(Tbutton(start, 'START TRADING'));

  return rootElement;
}

export default tintro;
