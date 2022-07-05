const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
const elements = ingredients.map((el) => {
  // Создаем Li каждому элементу на каждой итерации
  const listEl = document.createElement("li");
  // Добавляем текст каждому элементу (Li)
  listEl.textContent = el;
  // Добавляем класс каждому элементу (Li)
  listEl.classList.add("item");
  // console.log(listEl);
  return listEl;
});
// console.log(elements);
// Добавляем каждый элемент (Li) в (Ul "ingredientsListEl" )
ingredientsListEl.append(...elements);

// ingredientsListEl.insertAdjacentHTML("beforeend", );
// console.log(ingredientsListEl);
