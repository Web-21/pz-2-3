
document.querySelectorAll('img').forEach((img) => {
  
  img.addEventListener('click', () => {
    alert(`Image link: ${img.dataset.href}`);
  });

  
  img.addEventListener('contextmenu', (event) => {
    event.preventDefault(); 
    let currentRotation = img.style.transform.match(/rotate\((\d+)deg\)/);
    let angle = currentRotation ? parseInt(currentRotation[1]) : 0;
    img.style.transform = `rotate(${angle + 90}deg)`;
  });
});


document.querySelectorAll('a').forEach((link) => {
  const originalText = link.textContent;
  link.addEventListener('mouseover', () => {
    link.textContent = `${originalText} (${link.href})`;
  });
  link.addEventListener('mouseout', () => {
    link.textContent = originalText;
  });
});


const form = document.getElementById('userForm');
const demo = document.getElementById('demo');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const ageError = document.getElementById('ageError');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  let isValid = true;

  // Проверка имени
  if (!/^[a-zA-Zа-яА-ЯёЁїЇєЄіІґҐ']{1,50}$/.test(firstNameInput.value)) {
    isValid = false;
    firstNameInput.classList.add('red-border');
    firstNameError.textContent = 'Введіть коректне ім’я (лише літери)';
  } else {
    firstNameInput.classList.remove('red-border');
    firstNameError.textContent = '';
  }

  // Проверка фамилии
  if (!/^[a-zA-Zа-яА-ЯёЁїЇєЄіІґҐ']{1,50}$/.test(lastNameInput.value)) {
    isValid = false;
    lastNameInput.classList.add('red-border');
    lastNameError.textContent = 'Введіть коректне прізвище (лише літери)';
  } else {
    lastNameInput.classList.remove('red-border');
    lastNameError.textContent = '';
  }

  // Проверка возраста
  if (!/^[0-9]+$/.test(ageInput.value) || parseInt(ageInput.value) < 0) {
    isValid = false;
    ageInput.classList.add('red-border');
    ageError.textContent = 'Введіть коректний вік (число більше 0)';
  } else {
    ageInput.classList.remove('red-border');
    ageError.textContent = '';
  }

  // Вывод данных, если всё корректно
  if (isValid) {
    demo.innerHTML = `
      <p>First Name: ${firstNameInput.value}</p>
      <p>Last Name: ${lastNameInput.value}</p>
      <p>Age: ${ageInput.value}</p>
    `;
  } else {
    demo.textContent = ''; // Скрываем результаты, если есть ошибки
  }
});
