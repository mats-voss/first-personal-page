// ---- Random Color on load ----
var curColor;
function setMainColor() {
    const colors = [
        "#FF6633",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#99FF99",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#33FFCC",
        "#4DB3FF",
        "#1AB399",
        "#00E680",
        "#E6FF80",
        "#1AFF33",
        "#66E64D",
        "#99E6E6",
    ];
    let newColor = colors[Math.round(Math.random() * 3)];
    if (!curColor || curColor !== newColor) {
        document.documentElement.style.setProperty("--main-color", newColor);
        curColor = newColor;
    } else setMainColor();
}

// ---- Bg Animation Effect ----
function bgAnimationItems() {
    const rows = 7,
        cols = 10;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const div = document.createElement("div");
            div.className = `col-${j + 1}`;
            document.querySelector(".bg-animation-effect").appendChild(div);
        }
    }
}

bgAnimationItems();
setMainColor();
