const linksElement = document.getElementById('navLinks')
const hamburgerElement = document.getElementById('navHamburger')

//console.log('click')
linksElement.style.display = 'none'

hamburgerElement.addEventListener('touchstart', () => {
    console.log(toString(linksElement.style.display))
    if (linksElement.style.display == 'none') {
        linksElement.style.display = 'flex'
    } else {
        console.log('false')
        linksElement.style.display = 'none'
    }
})