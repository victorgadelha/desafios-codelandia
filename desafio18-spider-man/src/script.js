const navMenu = document.querySelector('.nav-menu__hamburguer-container')
const navList = document.querySelector('.nav-menu__nav-list-container')
const navLink = document.querySelectorAll('.nav-menu__nav-list')

navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navList.classList.toggle('active')
    navLink.forEach(link => {
        link.classList.toggle('active')
    });
})

