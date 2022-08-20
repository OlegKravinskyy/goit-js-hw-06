const input = document.querySelector("#font-size-control");
const changeSizeText = document.querySelector("#text");

console.log(input.value);
input.addEventListener("input", onChangeText);

function onChangeText(event) {
  changeSizeText.style.fontSize = `${input.value}px`;
}
