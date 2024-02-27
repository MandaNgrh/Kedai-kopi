// Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika Hamburgaer di Klik

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Klik Diluar Sidebar Untuk Hide

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});