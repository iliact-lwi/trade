import main from './templates/main';

function tlanguage(languages) {
  const rootElement = document.createElement('div');
  let selected = languages.find((language) => language.default);
  let opened = false;

  rootElement.classList.add('tlanguage', 'tlanguage_close');
  rootElement.insertAdjacentHTML('afterbegin', main(selected.value, languages));
  rootElement
    .querySelector(`[data-id="${selected.id}"]`)
    .classList.add('tlanguage__dropdown-item_selected');

  const input = rootElement.querySelector('[data-type="selected"]');
  const icon = rootElement.querySelector('[data-type="icon"]');

  rootElement.addEventListener('click', clickHandler, false);

  function clickHandler(event) {
    const { target } = event;

    if (target.closest('[data-type="static"]')) {
      opened ? close() : open();
    }

    const element = target.closest('[data-type="drop-item"]');
    if (element) {
      select(element.dataset.id);
    }
  }

  function open() {
    rootElement.classList.remove('tlanguage_close');
    rootElement.classList.add('tlanguage_open');

    icon.classList.remove('fa-angle-down');
    icon.classList.add('fa-angle-up');

    opened = true;
  }

  function close() {
    rootElement.classList.remove('tlanguage_open');
    rootElement.classList.add('tlanguage_close');

    icon.classList.remove('fa-angle-up');
    icon.classList.add('fa-angle-down');

    opened = false;
  }

  function select(id) {
    close();

    const oldSelectedId = selected.id;

    selected = languages.find((language) => language.id === id);
    input.textContent = selected.value;

    rootElement
      .querySelector(`[data-id="${oldSelectedId}"]`)
      .classList.remove('tlanguage__dropdown-item_selected');

    rootElement
      .querySelector(`[data-id="${selected.id}"]`)
      .classList.add('tlanguage__dropdown-item_selected');
  }

  return rootElement;
}

export default tlanguage;
