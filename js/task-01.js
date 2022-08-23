const navItemCategory = document.querySelectorAll(".item");
console.log("Number of categories: " + navItemCategory.length);

navItemCategory.forEach((el) => {
  const catagoryName = el.firstElementChild;
  console.log("Category: " + catagoryName.textContent);
  const navCategoryLength = el.lastElementChild.children.length;
  console.log("Elements: " + navCategoryLength);
});
