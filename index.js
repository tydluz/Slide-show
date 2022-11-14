const track = document.querySelector(".slide__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".slide__button--forward");
const prevButton = document.querySelector(".slide__button--backward");
const dotNavs = document.querySelector(".slide__nav");
const dots = Array.from(dotNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
//Arranging the slides next to each other
slides.forEach(setSlidePosition);

//Adding a function that moves slides back and forward
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
};

//when i click the back button
prevButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

//when i click the forward button
nextButton.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    //moving to the next slide
    const nextSlide = currentSlide.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
});

//when i click on the indicators, i want the slides to switch
dotNavs.addEventListener("click", (e) => {
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotNavs.querySelector(".current-slide");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
});
