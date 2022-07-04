(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__button'),
    closeMenuBtn: document.querySelector('.header-menu__button'),
    menu: document.querySelector('.header-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
