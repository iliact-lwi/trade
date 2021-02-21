import main from './templates/main.html';

function tcomments() {
  const rooElement = document.createElement('div');
  const comments = [
    'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus incidunt corporis labore harum nostrum eius natus accusantium facere suscipit, in, minus assumenda? Perspiciatis neque aliquid voluptas aperiam repellendus eos repudiandae?',
    'Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.',
    'Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.',
  ];
  let current = 0;

  rooElement.classList.add('tcomments');
  rooElement.insertAdjacentHTML('afterbegin', main);

  const content = rooElement.querySelector('[data-type="content"]');
  const count = rooElement.querySelector('[data-type="count"]');
  const next = rooElement.querySelector('[data-type="next"]');
  const prev = rooElement.querySelector('[data-type="prev"]');

  content.textContent = getContent();
  count.textContent = getCount();
  next.addEventListener('click', nextHandler, false);
  prev.addEventListener('click', prevHandler, false);

  function nextHandler() {
    if (!comments[current + 1]) {
      current = 0;

      content.textContent = getContent();
      count.textContent = getCount();

      return;
    }

    current += 1;
    content.textContent = getContent();
    count.textContent = getCount();
  }

  function prevHandler() {
    if (!comments[current - 1]) {
      current = comments.length - 1;

      content.textContent = getContent();
      count.textContent = getCount();

      return;
    }

    current -= 1;
    content.textContent = getContent();
    count.textContent = getCount();
  }

  function getCount() {
    return `${current < 10 ? 0 : ''}${current + 1} / ${
      comments.length < 10 ? 0 : ''
    }${comments.length}`;
  }

  function getContent() {
    return comments[current];
  }

  return rooElement;
}

export default tcomments;
