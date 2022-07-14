var currentNumber = 0;
const currentNumberWrapper = document.querySelector("#currentNumber");
const adicionar = document.querySelector(".adicionar");
const subtrair = document.querySelector(".subtrair");

adicionar.addEventListener("click", (event) => {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "#eee";
    };
});

subtrair.addEventListener("click", (event) => {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "#d90429";
    };
});
