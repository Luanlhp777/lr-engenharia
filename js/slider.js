const slides = Array.from(document.querySelectorAll(".hero-slide"));

if (slides.length > 1) {
    let activeSlide = 0;

    setInterval(() => {
        slides[activeSlide].classList.remove("is-active");
        activeSlide = (activeSlide + 1) % slides.length;
        slides[activeSlide].classList.add("is-active");
    }, 5000);
}