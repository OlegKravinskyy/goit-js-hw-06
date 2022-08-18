let valueCounter = 0;

const btnDecriment = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");

btnDecriment.addEventListener("click", () => {
  valueCounter -= 1;
  counter.textContent = valueCounter;
});

btnIncrement.addEventListener("click", () => {
  valueCounter += 1;
  counter.textContent = valueCounter;
});
