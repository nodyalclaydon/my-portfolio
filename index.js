const menuBtn = document.querySelector(".menu-btn")
const navBar = document.querySelector(".navbar")

menuBtn.addEventListener("click", function() {
    navBar.classList.toggle("show-menu")
})

// const icons = document.querySelectorAll(".icon")
// const aboutLines = document.querySelectorAll(".about-text")

// const appearOptions = {
//     root: null,
//     threshold: 1,
//     rootMargin: "-150px 0px"
// }

// const appearObserver = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             entry.target.classList.remove("appear")
//         } else {
//             entry.target.classList.add("appear")
//             // appearObserver.unobserve(entry.target)
//         }
//     })
// }, appearOptions)

// aboutLines.forEach(line => {
//     appearObserver.observe(line)
// })

// icons.forEach(icon => {
//     appearObserver.observe(icon)
// })