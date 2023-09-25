let menu = document.querySelector('#bars');
let navb = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navb.classList.toggle('active');
};