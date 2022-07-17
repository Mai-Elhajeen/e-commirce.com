const showMenu = document.querySelector('#show')
const closeMenu = document.querySelector('#close')
const menu = document.querySelector('.nav-list')

showMenu.addEventListener('click', () => {
    menu.classList.add('show-menu')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show-menu')

})