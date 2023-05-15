window.onload = () => {
    let num = 0;
    const counter = document.querySelector("#counter");
    counter.textContent = num;
    const btns = document.querySelectorAll(".btn");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const styles = e.currentTarget.classList;
            if(styles.contains("dcrease"))
        });
    });
};
