const button = document.getElementById('statusButton');

const statuses = ['update', 'delete', 'pending'];

const labels = ['Update', 'Delete', 'Pending'];

let currentStatus = 0;

button.addEventListener('click', () => {
    currentStatus = (currentStatus + 1) % statuses.length;

    button.classList.remove(...statuses);

    button.classList.add(statuses[currentStatus]);

    button.textContent = labels[currentStatus];
});
