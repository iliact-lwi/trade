function tbutton(paren, value) {
  const rootElement = document.createElement('span');

  rootElement.textContent = value;

  return rootElement;
}

export default tbutton;
