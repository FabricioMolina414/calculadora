const displayPreview = document.getElementById("display-preview");
const display = document.getElementById("display");
const numberButton = document.querySelectorAll(".number-button");
const operatorButton = document.querySelectorAll(".operator-button");
const c = document.getElementById("c");
const ce = document.getElementById("ce");
const equal = document.getElementById("equal");
const dot = document.getElementById("dot");

const displayActually = new Display(displayPreview, display);

numberButton.forEach(button => {
    button.addEventListener("click", () => {
        displayActually.addNumber(button.innerHTML);
    })
});

c.addEventListener("click", () => {
    displayActually.delete();
    displayActually.showNumbers();
});

ce.addEventListener("click", () => {
    displayActually.reset();
    displayActually.showNumbers();
});

operatorButton.forEach(button => {
    button.addEventListener("click", () => {
        displayActually.operation(button.innerText); 
        displayActually.showNumbers();
    })
});

dot.addEventListener("click", () => {
    displayActually.addNumber(dot.textContent);
    displayActually.showNumbers();
});

equal.addEventListener("click", () => {
    displayActually.calculate();
    displayActually.showNumbers();
});
