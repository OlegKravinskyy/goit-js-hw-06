const input = document.querySelector("#validation-input");
const inputClass = input.classList;
const inputDataLength = Number(input.dataset.length);

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  const text = event.currentTarget.value;

  if (text.length !== inputDataLength) {
    inputClass.add("invalid");
    inputClass.remove("valid");
  } else {
    inputClass.add("valid");
    inputClass.remove("invalid");
  }
}
