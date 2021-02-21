import Tintro from '../../components/Tintro/Tintro';
import Tstarted from '../../components/Tstarted/Tstarted';
import Tcomments from '../../components/Tcomments/Tcomments';
import Tfaq from '../../components/Tfaq/Tfaq';
import Tcontact from '../../components/Tcontact/Tcontact';
import Tfooter from '../../components/Tfooter/Tfooter';

function home() {
  const rootElement = document.createElement('main');
  const container = document.createElement('div');

  rootElement.classList.add('home');
  container.classList.add('container', 'p-0');

  container.append(Tintro());
  container.append(Tstarted());
  container.append(Tcomments());
  container.append(Tfaq());
  container.append(Tcontact());
  container.append(Tfooter());

  rootElement.append(container);

  return rootElement;
}

export default home;
