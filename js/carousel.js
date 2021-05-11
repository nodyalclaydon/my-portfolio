const track = document.querySelector(".carousel__track")
const slides = Array.from(track.children)
const nextButton = document.querySelector(".carousel__button--right")
const prevButton = document.querySelector(".carousel__button--left")
const dotsNav = document.querySelector(".carousel__nav")
const dots = Array.from(dotsNav.children)

//arrange slides next to one another
const setSlidePosition = (slide, index) => {
    const slideWidth = slides[0].getBoundingClientRect().width
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition) //initial set slide position

//move to new slide functions
const moveToSlide = (track, currentSlide, targetSlide) => {
    slides.forEach(setSlidePosition) //resets slide position each time to allow browser window resizing
    track.style.transform = "translateX(-" + targetSlide.style.left + ")"
    currentSlide.classList.remove("current-slide")
    targetSlide.classList.add("current-slide")
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide")
    targetDot.classList.add("current-slide")
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("is-hidden")
        nextButton.classList.remove("is-hidden")
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden")
        nextButton.classList.add("is-hidden")
    } else {
        prevButton.classList.remove("is-hidden")
        nextButton.classList.remove("is-hidden")
    }
}

//right button => move slides to the right
nextButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide")
    const nextSlide = currentSlide.nextElementSibling
    const currentDot = dotsNav.querySelector(".current-slide")
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex(slide => slide === nextSlide)
    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
    hideShowArrows(slides, prevButton, nextButton, nextIndex)
})

//left button => move slides to the left
prevButton.addEventListener("click", e => {
    const currentSlide = track.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling
    const currentDot = dotsNav.querySelector(".current-slide")
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex(slide => slide === prevSlide)
    //move to previous slide
    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
    hideShowArrows(slides, prevButton, nextButton, prevIndex)
})

//dots navigation to move to that slide
dotsNav.addEventListener("click", e => {
    const targetDot = e.target.closest("button") //returns null unless button is clicked
    
    if (!targetDot) return

    const currentSlide = track.querySelector(".current-slide")
    const currentDot = dotsNav.querySelector(".current-slide")
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
    hideShowArrows(slides, prevButton, nextButton, targetIndex)
})