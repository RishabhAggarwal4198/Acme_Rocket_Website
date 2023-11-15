const initApp = () => {
    const hamburgerBtn = document.getElementryById ('hamburger-button')
    const mobileMenu = document.getElementById ('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    hamburgerBtn.addEventListner('click', toggleMenu)
    mobileMenu.addEventListner('click', )


}