const container = document.getElementById("container");

/* Create grid */

let createGrid = (amountOfSquares = 32) => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("square");
    }
}

createGrid();