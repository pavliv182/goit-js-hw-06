// Задание 1

// 1й вариант решения
// const listEl = document.querySelector('#categories');
// // console.log(listEl);
// console.log('Number of categories:', listEl.children.length);

// 2й вариант решения
const allItems = document.querySelectorAll(".item");
// console.log(allItems);
console.log("Number of categories:", allItems.length);

// Задание 2
allItems.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
