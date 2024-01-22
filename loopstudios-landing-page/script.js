const contentTop = document.querySelector('.bottom-header-btn');
const movies = document.querySelector('.bottom-movies');
const seeAllBtn = document.querySelector('.see-all-btn');

const mobile = document.querySelector('.mobile');



// if(document.body.style.width <= "375px") {
//     contentTop.removeChild(seeAllBtn);
//     movies.appendChild(seeAllBtn);
// }
// if(document.body.style.width > "375px") {
//     movies.removeChild(seeAllBtn);
//     contentTop.appendChild(seeAllBtn);
// } 

const iconHamburger = document.querySelector('.icon-hamburger');
const modalMenu = document.querySelector('.modal-menu');
iconHamburger.addEventListener('click', () => {
    modalMenu.style.display = "flex";
});

const closeBtn = modalMenu.querySelector('.close-btn');
closeBtn.addEventListener('click', () =>  {
    modalMenu.style.display = "none";
});