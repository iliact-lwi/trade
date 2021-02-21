function main(value, languages) {
  const items = languages.map((language) => {
    return `
      <div class="tlanguage__dropdown-item" data-type="drop-item" data-id="${language.id}">${language.value}</div>
    `;
  });

  return `
    <div class="tlanguage__static" data-type="static">
      <div class="tlanguage__selected" data-type="selected">${value}</div>
      <div class="tlanguage__caret">
        <i class="fas fa-angle-down" data-type="icon" ></i>
      </div>
    </div>
    <div class="tlanguage__dropdown">
      ${items.join('')}
    </div>
  `;
}

export default main;
