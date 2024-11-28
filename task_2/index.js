// Стани кнопки
const states = [
    { text: 'Initial', class: 'status-initial' },
    { text: 'Processing', class: 'status-processing' },
    { text: 'Success', class: 'status-success' },
    { text: 'Error', class: 'status-error' },
];

// Початковий індекс стану
let currentStateIndex = 0;

// Отримуємо кнопку
const button = document.getElementById('statusButton');

// Обробник подій для кліку
button.addEventListener('click', () => {
    // Видаляємо поточний клас
    button.classList.remove(states[currentStateIndex].class);

    // Змінюємо стан
    currentStateIndex = (currentStateIndex + 1) % states.length;

    // Додаємо новий клас і текст
    button.classList.add(states[currentStateIndex].class);
    button.textContent = states[currentStateIndex].text;
});
