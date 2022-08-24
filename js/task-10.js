function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divBox = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector("#controls").firstElementChild;

console.log(input);
console.log(btnCreate);
console.log(btnDestroy);

btnCreate.addEventListener("click", onCreateDiv);
btnDestroy.addEventListener("click", onDestroyDiv);

function onCreateDivElements(amount) {
  let size = 30;
  let markup = "";

  for (let i = 0; i < amount; i += 1) {
    const divColor = getRandomHexColor();
    markup += `<div style="width:${size + i * 10}px; height:${
      size + i * 10
    }px; background-color: ${divColor}; display:block;"> </div>`;
  }
  divBox.insertAdjacentHTML("afterbegin", markup);
}

function onCreateDiv() {
  const amount = Number(input.value);

  onCreateDivElements(amount);
}

function onDestroyDiv() {
  divBox.innerHTML = "";
}
