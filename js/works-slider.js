const workSlides = Array.from(
    document.querySelectorAll(".work-slide")
);

const prevButtons = document.querySelectorAll(".work-prev");
const nextButtons = document.querySelectorAll(".work-next");

let currentWorkSlide = 0;

function showWorkSlide(index) {
    if (!workSlides.length) return;

    workSlides[currentWorkSlide].classList.remove("is-active");

    currentWorkSlide =
        (index + workSlides.length) % workSlides.length;

    workSlides[currentWorkSlide].classList.add("is-active");
}

prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showWorkSlide(currentWorkSlide - 1);
    });
});

nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
        showWorkSlide(currentWorkSlide + 1);
    });
});