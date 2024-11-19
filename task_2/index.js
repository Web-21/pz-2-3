const button = document.getElementById('stateButton');

const states = [
  { text: 'Inactive', class: 'inactive' },
  { text: 'Active', class: 'active' },
  { text: 'Success', class: 'success' },
];

let currentIndex = 0; 

button.addEventListener('click', () => {
  button.classList.remove(states[currentIndex].class);

  currentIndex = (currentIndex + 1) % states.length;

  button.classList.add(states[currentIndex].class);
  button.textContent = states[currentIndex].text;
});
