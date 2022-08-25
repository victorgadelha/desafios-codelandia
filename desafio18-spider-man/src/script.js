const navMenu = document.querySelector('.nav-menu__hamburguer-container')
const navList = document.querySelector('.nav-menu__nav-list-container')

navMenu.addEventListener('click', () =>{
    navMenu.classList.toggle('active')
    navList.classList.toggle('active')
})