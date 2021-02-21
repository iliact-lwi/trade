import main from './templates/main.html';
import Tbutton from '../Tbutton/Tbutton';

function tcontact() {
  const rootElement = document.createElement('div');

  rootElement.classList.add('tcontact');
  rootElement.insertAdjacentHTML('afterbegin', main);

  const send = rootElement.querySelector('[data-type="send"]');
  send.append(Tbutton(send, 'SEND'));

  const name = rootElement.querySelector('[data-type="name"]');
  const email = rootElement.querySelector('[data-type="email"]');
  const message = rootElement.querySelector('[data-type="message"]');

  name.addEventListener('input', nameValidator, false);
  email.addEventListener('input', emailValidator, false);
  message.addEventListener('input', messageValidator, false);

  function nameValidator(event) {
    const { target } = event;
    const { value } = target;
    const label = target.parentElement.querySelector('[data-type="label"]');

    if (value.length < 3) {
      if (target.classList.contains('tcontact__input_success'))
        target.classList.remove('tcontact__input_success');

      if (!target.classList.contains('tcontact__input_error')) {
        label.textContent = 'At least three characters';
        target.classList.add('tcontact__input_error');
      }
    } else {
      if (target.classList.contains('tcontact__input_error')) {
        label.textContent = '';
        target.classList.remove('tcontact__input_error');
      }

      if (!target.classList.contains('tcontact__input_success'))
        target.classList.add('tcontact__input_success');
    }
  }

  function emailValidator(event) {
    const { target } = event;
    const { value } = target;
    const label = target.parentElement.querySelector('[data-type="label"]');
    const validator = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

    if (validator.test(value) === false) {
      if (target.classList.contains('tcontact__input_success'))
        target.classList.remove('tcontact__input_success');

      if (!target.classList.contains('tcontact__input_error')) {
        label.textContent = 'Incorrect email type';
        target.classList.add('tcontact__input_error');
      }
    } else {
      if (target.classList.contains('tcontact__input_error')) {
        label.textContent = '';
        target.classList.remove('tcontact__input_error');
      }

      if (!target.classList.contains('tcontact__input_success'))
        target.classList.add('tcontact__input_success');
    }
  }

  function messageValidator(event) {
    const { target } = event;
    const { value } = target;
    const label = target.parentElement.querySelector('[data-type="label"]');

    if (value.length < 6) {
      if (target.classList.contains('tcontact__input_success'))
        target.classList.remove('tcontact__input_success');

      if (!target.classList.contains('tcontact__input_error')) {
        label.textContent = 'At least six characters';
        target.classList.add('tcontact__input_error');
      }

      target.classList.add('tcontact__input_error');
    } else {
      if (target.classList.contains('tcontact__input_error')) {
        label.textContent = '';
        target.classList.remove('tcontact__input_error');
      }

      if (!target.classList.contains('tcontact__input_success'))
        target.classList.add('tcontact__input_success');
    }
  }

  return rootElement;
}

export default tcontact;
