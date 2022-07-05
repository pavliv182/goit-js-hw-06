// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", () => {
  if (Number(textInput.dataset.length) !== textInput.value.length) {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  } else {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    // console.log(textInput.dataset.length);
    // console.log(Number(textInput.dataset.length));
  }
});

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
