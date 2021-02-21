import main from './templates/main.html';

function tfooter() {
  const rootElement = document.createElement('div');

  rootElement.classList.add('tfooter');
  rootElement.insertAdjacentHTML('afterbegin', main);

  return rootElement;
}

export default tfooter;
