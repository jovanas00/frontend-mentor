const modal = document.querySelector('.modal');
modal.style.display = 'none';

const iconMenu = document.querySelector('.icon-menu');
iconMenu.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
});

const modalClose = modal.querySelector('.modal__close');
modalClose.addEventListener('click', function() {
  modal.style.display = 'none';
});