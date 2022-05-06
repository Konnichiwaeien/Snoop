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



const setSlidePopup = (parentSel) => {
  const parent = document.querySelector(parentSel);
  const items = parent.querySelectorAll('.links__item');

  items.forEach((item) => {
    const popup = item.querySelector('.links__visits');
    const btn = item.querySelector('.links__open');


    btn.addEventListener('click', () => {
      let isActive = popup.classList.contains('links__visits--active');

      if (isActive) {
        popup.classList.remove('links__visits--active');
        btn.classList.remove('links__open--active');
        popup.style.height = 0 + "px";
      } else {
        popup.classList.add('links__visits--active');
        btn.classList.add('links__open--active');
        popup.style.height = popup.querySelector(".links__inner").offsetHeight + "px";
      }
    });
  });
}

setSlidePopup('.links')



const clearSearchValue = () => {
  const search = document.querySelector('.form__search');
  const remove = document.querySelector('.form__remove');

  remove.addEventListener('click', () => {
    search.value = '';
  });
}

clearSearchValue();