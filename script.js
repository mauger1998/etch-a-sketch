const container = document.getElementById("container");
const square = document.querySelector("div");
const reset = document.querySelector("button");
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
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    e.target.style.backgroundColor = `${color}`
});



/* Actual call of fucntions */

createGrid();

userInput.addEventListener("change", (e) => {
    updateGrid();
});

reset.addEventListener("click", (e) => {
    container.innerHTML = "";
    userInput.value = "";
    container.style.gridTemplateColumns = "repeat(16, 2fr)"
    container.style.gridTemplateRows = "repeat(16, 2fr)"
    createGrid();
});


    
    



















