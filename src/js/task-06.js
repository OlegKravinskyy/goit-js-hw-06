const input = document.querySelector("#validation-input");
const inputClass = input.classList;

input.addEventListener("blur", onInputFocus);

function onInputFocus(event) {
  const text = event.currentTarget.value;
  if (text.length <= 6) {
    inputClass.add("valid");
  } else {
    inputClass.add("invalid");
  }
}
