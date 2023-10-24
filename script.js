const linksElement = document.getElementById('navLinks')
const hamburgerElement = document.getElementById('navHamburger')

hamburgerElement.addEventListener('touchstart', () => {
    linksElement.classList.toggle('responsive');
},{ passive: true });