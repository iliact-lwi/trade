import Tnavbar from './components/Tnavbar/Tnavbar';
import Home from './pages/Home/Home';

function app() {
  const rootElement = document.createElement('div');
  const navbarElement = document.createElement('div');

  rootElement.classList.add('app');
  navbarElement.classList.add('app__tnavbar');

  navbarElement.append(Tnavbar());
  rootElement.prepend(navbarElement);
  rootElement.append(Home());

  return rootElement;
}

export default app;
