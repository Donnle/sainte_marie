const burger = document.getElementsByClassName('burger')[0]
const navbar = document.getElementsByClassName('header-nav')[0]

burger.addEventListener('click', () => {
   navbar.classList.toggle('active')
})