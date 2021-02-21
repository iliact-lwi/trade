import main from './templates/main';
import data from './data';

function tfaq() {
  const rootElement = document.createElement('div');
  const questions = data();
  let current = false;

  rootElement.classList.add('tfaq');
  rootElement.insertAdjacentHTML('afterbegin', main(questions));

  rootElement.addEventListener('click', clickHandler, false);

  function clickHandler(event) {
    const { target } = event;

    if (target.closest('[data-type="times"]')) {
      const element = target.closest('[data-id]');
      const { id } = element.dataset;
      const times = element.querySelector('[data-type="times"]').firstChild;

      if (id === current) {
        element.classList.add('tfaq__question_close');
        times.classList.remove('fa-times');
        times.classList.add('fa-plus');

        current = false;

        return;
      }

      if (current) {
        const prevQuestion = rootElement.querySelector(
          `[data-id="${current}"]`
        );
        const prevTimes = prevQuestion.querySelector('[data-type="times"]')
          .firstChild;

        prevQuestion.classList.add('tfaq__question_close');
        prevTimes.classList.remove('fa-times');
        prevTimes.classList.add('fa-plus');

        element.classList.remove('tfaq__question_close');
        times.classList.remove('fa-plus');
        times.classList.add('fa-times');

        current = id;

        return;
      }

      element.classList.remove('tfaq__question_close');
      times.classList.remove('fa-plus');
      times.classList.add('fa-times');

      current = id;
    }
  }

  return rootElement;
}

export default tfaq;
