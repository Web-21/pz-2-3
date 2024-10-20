const fluffy = document.getElementById('fluffy');
const sad = document.getElementById('sad');
const shocked = document.getElementById('shocked');

fluffy.addEventListener('contextmenu', rotate_image_fluffy);
sad.addEventListener('contextmenu',rotate_image_sad);
shocked.addEventListener('contextmenu', rotate_image_shocked);
let counter_fluffy = 0;
let counter_sad = 0;
let counter_shocked = 0;

function rotate_image_fluffy (event){
    event.preventDefault();
    counter_fluffy = counter_fluffy + 90;
    this.style.transform = `rotate(${counter_fluffy}deg)`;
}
function rotate_image_sad (event){
    event.preventDefault();
    counter_sad = counter_sad + 90;
    this.style.transform = `rotate(${counter_sad}deg)`;
}
function rotate_image_shocked (event){
    event.preventDefault();
    counter_shocked = counter_shocked + 90;
    this.style.transform = `rotate(${counter_shocked}deg)`;
}
function alert_cats () {
    alert('Kitty cat!');
}
fluffy.addEventListener('click', alert_cats);
sad.addEventListener('click', alert_cats);
shocked.addEventListener('click', alert_cats);

const links = document.querySelectorAll('.hover-link');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.textContent += ` (${link.href})`;
    });

    link.addEventListener('mouseleave', () => {
        link.textContent = link.textContent.replace(/\s\(\S+\)$/, '');
    });
});

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const submit = document.getElementById('submit');
let namePattern = /^[a-zA-Zа-яА-Я]+$/;
submit.addEventListener('click', checker); 

function checker () {
    let ageValue = parseInt(age.value, 10);
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    firstName.classList.remove('invalid');
    lastName.classList.remove('invalid');
    age.classList.remove('invalid');
    let valid = true;
    if (!namePattern.test(firstNameValue) || firstNameValue.length > 50) {
        firstName.classList.add('invalid');
        valid = false;
    }
    if (!namePattern.test(lastNameValue) || lastNameValue.length > 50) {
        lastName.classList.add('invalid');
        valid = false;
    }
    if (isNaN(ageValue) || ageValue < 0) {
        age.classList.add('invalid');
        valid = false;
    }
    if (!valid) {
        alert('Invalid input!');
    } else {
        alert("Дані записано!")
    }
}
