const button = document.getElementById('statusButton');

const states = [
    { className: 'mov_update', label: 'Update' },
    { className: 'mov_delete', label: 'Delete' },
    { className: 'mov_pending', label: 'Pending' }
];

let currentIndex = 0;

button.addEventListener('click', () => {
    states.forEach(state => button.classList.remove(state.className));
    currentIndex = (currentIndex + 1) % states.length;
    button.classList.add(states[currentIndex].className);
    button.textContent = states[currentIndex].label;
});
