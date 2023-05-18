window.onload = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", function () {
        links.classList.toggle("show-links");
    });

    const navbtn = document.querySelector(".navbtn");
    const sidebat = document.querySelector(".sidebar");
    const sidebarbtn = document.querySelector(".sidebarbtn");
    navbtn.addEventListener("click", () => {
        sidebat.classList.add("show-sidebar");
    });
    sidebarbtn.addEventListener("click", () => {
        sidebat.classList.remove("show-sidebar");
    });
};
