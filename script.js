const container = document.getElementById("container");
const square = document.querySelector("div");
const button = document.querySelector("button");
const userInput = document.getElementById("quantity");




/* Create grid */

let createGrid = (amountOfSquares = 256) => {
    for (let i = 0; i < amountOfSquares; i++) {
        const div = document.createElement("div");
        container.appendChild(div);
        div.classList.add("square");
    }
}

  /* Update Grid Function */

    const updateGrid = () => {
    container.innerHTML = "";
    container.style.gridTemplateColumns = 
        `repeat(${userInput.value}, 2fr)`;
    container.style.gridTemplateRows =
        `repeat(${userInput.value}, 2fr)`;
    for (let i = 0; i < userInput.value * userInput.value; i++ ) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        container.appendChild(newDiv);
    }
    
}

/*Change to black on hover */

square.addEventListener("mouseover", (e) => {
    event.target.classList.add("fill");
});



/* Actual call of fucntions */

createGrid();

userInput.addEventListener("change", (e) => {
    updateGrid();
});


















