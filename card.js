const projectCard = document.querySelectorAll(".project-card")

projectCard.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("flipped")
    })
})