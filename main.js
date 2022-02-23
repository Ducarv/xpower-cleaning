const btnMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');
const nav = document.getElementsByTagName('nav');

const showMenu = () => {
    navList.classList.toggle('active');
    btnMenu.classList.toggle('active');
    
    if(navList.classList.contains('active')) {
        return nav.style.overflowY = 'hidden'
    }
}

btnMenu.addEventListener('click', showMenu);
