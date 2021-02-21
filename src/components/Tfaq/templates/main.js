function main(questions) {
  const items = questions.map((item) => {
    return `
      <div class="tfaq__question tfaq__question_close" data-id=${item.id}>
        <div class="tfaq__content">
          <div class="tfaq__subtitle">${item.title}</div>
          <div class="tfaq__text">${item.text}</div>
        </div>
        <div class="tfaq__times" data-type="times"><i class="fas fa-plus"></i></div>
      </div>
    `;
  });

  return `
    <div class="tfaq__title">
      Frequently asked <span class="dedicated">questions</span>
    </div>
    <div class="tfaq__questions">
      ${items.join('')}
    </div>
  `;
}

export default main;
