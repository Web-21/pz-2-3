// Task 1: Клик по изображениям и показ ссылки
document.querySelectorAll('#task1 .MOV_img-cont a img').forEach(imgElem => {
    imgElem.addEventListener('click', evt => {
        evt.preventDefault();
        alert(imgElem.parentNode.href);
    });
});

// Task 2: Поворот изображений при клике
document.querySelectorAll('#task2 .MOV_img-cont img').forEach(pic => {
    pic.addEventListener('click', evt => {
        evt.preventDefault();
        const currentTransform = pic.style.transform;
        let newAngle = 90;
        if (currentTransform.includes('rotate')) {
            const extractedAngle = parseInt(currentTransform.replace(/[^\d]/g, ''), 10);
            newAngle = extractedAngle + 90;
        }
        pic.style.transform = `rotate(${newAngle}deg)`;
    });
});

// Task 3: При наведении на ссылку добавляем href, при уходе — убираем
document.querySelectorAll('#task3 .MOV_link-cont a').forEach(linkEl => {
    linkEl.addEventListener('mouseover', () => {
        linkEl.textContent += ` (${linkEl.href})`;
    });
    linkEl.addEventListener('mouseout', () => {
        linkEl.textContent = linkEl.textContent.replace(` (${linkEl.href})`, '');
    });
});

// Task 4: Проверка формы и вывод результата
const userForm = document.getElementById('userForm');
const fNameField = document.getElementById('firstName');
const lNameField = document.getElementById('lastName');
const ageField   = document.getElementById('age');
const outputDemo = document.getElementById('demo');

userForm.addEventListener('submit', event => {
    event.preventDefault();

    const validName = /^[a-zA-Z]+$/;
    const validAge  = /^[0-9]+$/;

    // Проверка имени
    fNameField.style.border = validName.test(fNameField.value) ? '' : '1px solid red';
    // Проверка фамилии
    lNameField.style.border = validName.test(lNameField.value) ? '' : '1px solid red';
    // Проверка возраста
    ageField.style.border = validAge.test(ageField.value) ? '' : '1px solid red';

    // Если все данные корректны — выводим информацию
    if (validName.test(fNameField.value) && validName.test(lNameField.value) && validAge.test(ageField.value)) {
        outputDemo.innerHTML = `Імя: ${fNameField.value}<br>Прізвище: ${lNameField.value}<br>Вік: ${ageField.value}`;
    }
});
