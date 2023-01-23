// Grab elements
const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav--links")
const body = document.querySelector("body")

// Listen for click on nav menu when device width is less than or equal to 880px
menu.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 880px)").matches) {
        body.classList.toggle("mobile-menu")
    }
    
})