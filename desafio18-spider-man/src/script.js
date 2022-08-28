const navMenu = document.querySelector('.nav-menu__hamburguer-container')
const navList = document.querySelector('.nav-menu__nav-list-container')
const navLink = document.querySelectorAll('.nav-menu__nav-list')
const button = document.querySelector('.trailer__button')
const exitButton = document.querySelector('.modal-container__exit')
const modal = document.querySelector('.modal-container')
const trailer = document.querySelector('video')



navMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    navList.classList.toggle('active')
    navLink.forEach(link => {
        link.classList.toggle('active')
    });
})

button.addEventListener('click', () => {
    modal.classList.toggle('hidden')
    exitButton.classList.toggle('hidden')
})

exitButton.addEventListener('click', () => {
    modal.classList.toggle('hidden')
    trailer.currentTime = 0;
    trailer.pause()
    
})