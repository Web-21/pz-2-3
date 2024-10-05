document.querySelectorAll('#task1 .iav-image-container a img').forEach(img => {
    img.addEventListener('click', function (e) {
        e.preventDefault();
        alert(this.parentElement.href);
    });
});

document.querySelectorAll('#task2 .iav-image-container img').forEach(img => {
    img.addEventListener('click', function (e) {
        e.preventDefault();
        let currentRotation = img.style.transform.match(/rotate\((\d+)deg\)/);
        let newRotation = currentRotation ? (parseInt(currentRotation[1]) + 90) : 90;
        img.style.transform = `rotate(${newRotation}deg)`;
    });
});

document.querySelectorAll('#task3 .iav-link-container a').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.innerText += ` (${this.href})`;
    });

    link.addEventListener('mouseout', function () {
        this.innerText = this.innerText.replace(` (${this.href})`, '');
    });
});

const form = document.getElementById('userForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const ageInput = document.getElementById('age');
const demo = document.getElementById('demo');

const nameRegex = /^[a-zA-Z]+$/;
const ageRegex = /^\d+$/;

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const validateInput = (input, regex) => {
        if (!regex.test(input.value.trim())) {
            input.classList.add('invalid');
            return false;
        } else {
            input.classList.remove('invalid');
            return true;
        }
    };
    
    let isValid = true;
    
    isValid &= validateInput(firstNameInput, nameRegex);
    isValid &= validateInput(lastNameInput, nameRegex);
    isValid &= validateInput(ageInput, ageRegex);
    
    if (isValid) {
        demo.innerHTML = `First Name: ${firstNameInput.value}<br>
                        Last Name: ${lastNameInput.value}<br>
                        Age: ${ageInput.value}`;
    }
});