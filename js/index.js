// --------Show Menu--------
const menuBtn = document.querySelector(".menu-btn")
const navBar = document.querySelector(".navbar")
const menuItem = document.querySelectorAll(".menu-item")

menuBtn.addEventListener("click", showMenu)

menuItem.forEach(item => {
    item.addEventListener("click", showMenu)
})

function showMenu() {
    navBar.classList.toggle("show-menu")
    menuItem.forEach(item => {
        item.classList.toggle("show-menu")
    })
}

// -------- Logo Animation --------

const techLogos = document.querySelectorAll(".tech-logos")
let i = 0

setInterval(cycleLogos, 1500)

function cycleLogos() {
    if (i === 0) {
        techLogos[techLogos.length - 1].classList.remove("display")
    } else {techLogos[i-1].classList.remove("display")}

    techLogos[i].classList.add("display")

    if (i === techLogos.length - 1) {
        i = 0
    } else { i++ }
}