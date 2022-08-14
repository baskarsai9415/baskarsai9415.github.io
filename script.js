const toogleBtn = document.getElementsByClassName('toogle-button')[0]
const navbarLinks = document.getElementsByClassName('container1')[0]

toogleBtn.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})