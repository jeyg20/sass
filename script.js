const linksElement = document.getElementById('navLinks')
const hamburgerElement = document.getElementById('navHamburger')

//console.log('click')
//linksElement.style.display = 'none'

hamburgerElement.addEventListener('touchstart', () => {
    if (linksElement.className === "icons") {
        linksElement.className += ' responsive'
    } else {
        linksElement.className = "icons"
    }
})