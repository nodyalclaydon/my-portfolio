//ICON POP ANIMATIONS
const icons = document.querySelectorAll(".icon")

const iconOptions = { 
    root: null,
    threshold: 1,
    rootMargin: "-150px 0px"
}

const iconObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
       if (!entry.isIntersecting) {
           entry.target.classList.remove("pop")
       } else {
        entry.target.classList.add("pop")
       }
    })
}, iconOptions)

icons.forEach(icon => {
    iconObserver.observe(icon)
})

//ABOUT LINES ANIMATIONS
const aboutContainer = document.querySelector(".about-container")
const aboutLines = document.querySelectorAll(".about-text")

const aboutLinesOptions = {
    root: null,
    threshold: 1,
    rootMargin: "0px"
}

const aboutLinesObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            aboutLines.forEach(line => {
                line.classList.remove("swipe")
            })
        } else {
            aboutLines.forEach(line => {
                line.classList.add("swipe")
            })
        }
    })
}, aboutLinesOptions)

aboutLinesObserver.observe(aboutContainer)