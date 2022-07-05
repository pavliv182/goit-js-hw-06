// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector(".login-form");
// console.log(formEl);

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  //   console.log(event);
  //   console.log(event.currentTarget.elements);
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  //   console.log(email);
  //   console.log(password);
  if (email.value === "" || password.value === "") {
    return alert("Please enter your Email and Password");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

// Вариант от Максима
// const loginForm = document.querySelector('.login-form');
// const emailField = document.querySelector('[name="email"]');
// const passwordField = document.querySelector('[name="password"]');

// loginForm.addEventListener('submit', event => {
//   event.preventDefault();
//   if (emailField.value === '' || passwordField.value === '') {
//     alert('Not all fields are filled');
//     return;
//   }
//   console.log({
//     email: emailField.value,
//     password: passwordField.value,
//   });
//   event.target.reset();
// });
