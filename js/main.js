const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-items');

let showMenu = false;

burger.addEventListener('click', toggle);

function toggle() {
    if (!showMenu) {
        burger.classList.add('close');
        nav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true;
    } else {
        burger.classList.remove('close');
        nav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false;
    }
}
