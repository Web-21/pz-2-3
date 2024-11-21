let button = document.getElementById('statusButton');

let statuses = ['eam_update', 'eam_delete', 'eam_pending'];
let labels = ['Update', 'Delete', 'Pending'];

let currentStatus = 0;

button.onclick = function () {
    currentStatus = currentStatus + 1;
    if (currentStatus >= statuses.length) {
        currentStatus = 0;
    }

    for (let i = 0; i < statuses.length; i++) {
        button.classList.remove(statuses[i]);
    }

    button.classList.add(statuses[currentStatus]);
    button.innerHTML = labels[currentStatus];
};
