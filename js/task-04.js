// document.addEventListener('keydown', event => {
//   console.log('key: ', event.key);
//   console.log('code: ', event.code);
// });
let counterValue = 0;
const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};
// const decrement = document.querySelector('[data-action="decrement"]');
// const increment = document.querySelector('[data-action="increment"]');
// const value = document.querySelector('#value');

// console.log(value.textContent);

refs.decrement.addEventListener("click", () => {
  counterValue -= 1;
  refs.value.textContent = counterValue;
});
refs.increment.addEventListener("click", () => {
  counterValue += 1;
  refs.value.textContent = counterValue;
});
