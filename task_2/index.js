const stateButton = document.getElementById('state-button');

const states = [
    { text: 'Delete', className: 'delete' },
    { text: 'Update', className: 'update' },
    { text: 'Download', className: 'download' },
    { text: 'Save', className: 'save' },
    { text: 'Create', className: 'create' }
];

let currentState = 0;

stateButton.textContent = states[currentState].text;
stateButton.classList.add(states[currentState].className);

stateButton.addEventListener('click', () => {
    stateButton.classList.remove(states[currentState].className);
    currentState = (currentState + 1) % states.length;
    stateButton.textContent = states[currentState].text;
    stateButton.classList.add(states[currentState].className);
});
