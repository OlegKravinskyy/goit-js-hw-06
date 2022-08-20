const form = document.querySelector(".login-form");
console.log(form);
const user = {};
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert("Error");
  }

  user.email = email.value;
  user.password = password.value;
  console.log(user);
  event.currentTarget.reset();
}
