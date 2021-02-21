import main from './templates/main.html';

function tstarted() {
  const rootElement = document.createElement('div');

  rootElement.classList.add('tstarted');
  rootElement.insertAdjacentHTML('afterbegin', main);

  return rootElement;
}

export default tstarted;
