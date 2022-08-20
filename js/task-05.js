const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputSubmit);

function onInputSubmit(event) {
  const name = event.currentTarget.value;
  !name
    ? (outputName.textContent = "Anonymous")
    : (outputName.textContent = name);
}
