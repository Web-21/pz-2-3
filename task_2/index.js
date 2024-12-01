
const states = [
    { text: 'Start', className: 'start' },
    { text: 'Processing', className: 'processing' },
    { text: 'Completed', className: 'completed' }
];

let currentStateIndex = 0; 

const button = document.getElementById('statusButton');

button.textContent = states[currentStateIndex].text;
button.classList.add(states[currentStateIndex].className);

button.addEventListener('click', () => {
    button.classList.remove(states[currentStateIndex].className);

    currentStateIndex = (currentStateIndex + 1) % states.length;

    button.textContent = states[currentStateIndex].text;
    button.classList.add(states[currentStateIndex].className);
});
