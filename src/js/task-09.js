// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  colorEl: document.querySelector(".color"),
  buttonEl: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};
// const colorEl = document.querySelector('.color');
// const buttonEl = document.querySelector('.change-color');
// const body = document.querySelector('body');

refs.buttonEl.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.colorEl.textContent = randomColor;
});
