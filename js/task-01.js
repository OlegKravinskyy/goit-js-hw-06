const navItemCategory = document.querySelectorAll(".item");
console.log("Number of categories: " + navItemCategory.length);

navItemCategory.forEach((el) => {
  const catagoryName = el.firstElementChild("h2");
  console.log("Category: " + catagoryName.textContent);
  const navCategoryLength = el.lastElementChild("li");
  console.log("Elements: " + navCategoryLength.length);
});
