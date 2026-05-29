const clientLogos = document.querySelectorAll(".client-logo");

let currentLogo = 0;

setInterval(() => {

    clientLogos[currentLogo].classList.remove("active");

    currentLogo++;

    if (currentLogo >= clientLogos.length) {
        currentLogo = 0;
    }

    clientLogos[currentLogo].classList.add("active");

}, 3000);