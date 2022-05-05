const setDropdown = (dropdownSel) => {
  const dropdown = document.querySelector(dropdownSel);
  const textbox = dropdown.querySelector('.dropdown__textbox');
  const options = dropdown.querySelectorAll('.dropdown__option');

  textbox.value = options[0].getAttribute('data-option');

  dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('dropdown--active');
  });

  const setValue = (val) => {
    textbox.value = val;
  }

  options.forEach((item) => {
    item.addEventListener('click', () => setValue(item.getAttribute('data-option')));
  });


}

setDropdown('.nav__dropdown');