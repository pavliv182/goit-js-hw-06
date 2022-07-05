const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", () => {
  if (refs.nameInput.value === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else refs.nameOutput.textContent = refs.nameInput.value;
  //   console.log(event.currentTarget.value);
});

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".
