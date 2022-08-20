const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const navListEl = document.querySelector("ul");

const elements = ingredients.map((option) => {
  const navItemEl = document.createElement("li");
  navItemEl.classList.add("item");
  navItemEl.textContent = option;

  return navItemEl;
});

navListEl.append(...elements);

//   ingredients.forEach((el) => {
//   const navItemEl = document.createElement("li");
//   navItemEl.classList.add("item");
//   navItemEl.textContent = el;
//   navListEl.appendChild(navItemEl);
// });

console.log(navListEl);
