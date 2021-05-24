const headlines = document.querySelectorAll(".page-header")
const subHeadlines = document.querySelectorAll(".page-subheader")
const contentAreas = document.querySelectorAll(".content-area")

const appearOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
}

const appearObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("appear")
        } else {
            entry.target.classList.add("appear")
            // appearObserver.unobserve(entry.target) < add to cancel observer after initial appear
        }
    })
}, appearOptions)

headlines.forEach(headline => {
    appearObserver.observe(headline)
})

subHeadlines.forEach(subheadline => {
    appearObserver.observe(subheadline)
})

contentAreas.forEach(contentArea => {
    appearObserver.observe(contentArea)
})