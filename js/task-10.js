// 1. Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// 2. Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

// 3. Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputEl: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  allBoxes: document.querySelector("#boxes"),
};
// console.log(refs.inputEl);
// console.log(refs.createBtn);
// console.log(refs.destroyBtn);
console.log(refs.allBoxes);

// Создаём номинальный размер коробки для дальнейших правок
let boxSize = 20;
// Создаём слушатель событий для кнопки "создать коробку"
refs.createBtn.addEventListener("click", onClickCreate);

function onClickCreate(event) {
  const value = refs.inputEl.value;
  createBoxes(value);
  // console.dir(value);
}

function createBoxes(amount) {
  // Создаём "ёмкость" для всех коробок, которые мы создадим
  // console.dir(box);
  const box = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    boxSize += 10;

    div.style.background = getRandomHexColor();
    div.style.width = boxSize + "px";
    div.style.height = boxSize + "px";
    // div.style.width = `${boxSize}px`;
    // div.style.height = `${boxSize}px`;

    // console.log(div.style.width);
    // console.log(div.style.height);
    box.append(div);
  }
  console.log(box);
  // Добавляем все коробки в div boxes
  refs.allBoxes.append(box);
}

// const refs = {
//   boxesEl: document.querySelector('#boxes'),
//   createBtn: document.querySelector('button[data-create]'),
//   destroyBtn: document.querySelector('button[data-destroy]'),
// };

// refs.createBtn.addEventListener('click', createBoxes);
// refs.destroyBtn.addEventListener('click', destroyBoxes);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// function createBoxes(amount) {
//   destroyBoxes();

//   amount = document.querySelector('input[type="number"]').value;
//   let injectHTML = '';
//   let boxSize = 30;

//   for (let i = 0; i < amount; i += 1) {
//     injectHTML += (
//       <div style="width: ${ boxSize } px; height: ${ boxSize } px; margin:10px; background-color: ${ getRandomHexColor ( ) }"></div>
//     );
//     boxSize += 10;
//   }
//   boxesEl.insertAdjacentHTML('beforeend', injectHTML);
// }

// function destroyBoxes() {
//   boxesEl.innerHTML = '';
// }
