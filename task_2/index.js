const controlButton = document.getElementById('statusButton');

const statuses = [
    { cssClass: 'mov_update', displayText: 'Update' },
    { cssClass: 'mov_delete', displayText: 'Delete' },
    { cssClass: 'mov_pending', displayText: 'Pending' }
];

let position = 0;

controlButton.addEventListener('click', () => {
    
    for (const item of statuses) {
        controlButton.classList.remove(item.cssClass);
    }
    
    position = (position + 1) % statuses.length;
    
   
    controlButton.classList.add(statuses[position].cssClass);
    controlButton.textContent = statuses[position].displayText;
});
