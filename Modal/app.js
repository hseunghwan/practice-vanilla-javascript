window.onload = () => {
    const modalBtn = document.querySelector(".modal-btn");
    const closeBtn = document.querySelector(".close-btn");
    const overlaydiv = document.querySelector(".modal-overlay");
    modalBtn.addEventListener("click", (e) => {
        overlaydiv.classList.toggle("open-modal");
    });
    closeBtn.addEventListener("click", () => {
        overlaydiv.classList.toggle("open-modal");
    });
};
