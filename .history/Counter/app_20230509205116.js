window.onload = () => {
    let num = 0;
    const counter = document.querySelector("#counter");
    const btns = document.querySelectorAll(".btn");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const styles = e.currentTarget.classList;
            if (styles.contains("dcrease")) num--;
            else if (styles.contains("reset")) num = 0;
            else num++;
            counter.textContent = num;
        });
    });
};
