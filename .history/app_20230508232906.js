window.onload = () => {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    const button = document.getElementById("btn");
    const span = document.getElementById("hexcolor");
    const main = document.getElementById("main");
    let color;

    button.addEventListener("click", () => {
        color = "#";
        for (let i = 0; i < 6; i++) {
            color += getrandnum();
        }
        span.innerText = color;
        main.style.backgroundColor = color;
    });

    const getrandnum = () => {
        return arr[Math.floor(Math.random() * 16)];
    };
};
