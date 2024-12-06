const upbtn = document.getElementById('upbtn');
const debtn = document.getElementById('debtn');
const pebtn = document.getElementById('pebtn');

const buttons = [upbtn, debtn, pebtn];

let currentBtnIndex = 0;

buttons.forEach((button, index) => {
    if (index !== currentBtnIndex) { button.style.display = 'none'; }
});

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons[index].style.display = 'none';
        if (index < buttons.length - 1) { buttons[index + 1].style.display = 'inline-block'; }
    });
});
