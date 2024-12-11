
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const ageInput = document.getElementById('age');
    const resultBlock = document.getElementById('demo');

    const nameRegex = /^[a-zA-Z]{1,50}$/;
    const ageRegex = /^[1-9][0-9]*$/;

    let formIsValid = true;

    [firstNameInput, lastNameInput, ageInput].forEach(input => input.classList.remove('invalid'));

    if (!nameRegex.test(firstNameInput.value)) {
        firstNameInput.classList.add('invalid');
        formIsValid = false;
    }

    if (!nameRegex.test(lastNameInput.value)) {
        lastNameInput.classList.add('invalid');
        formIsValid = false;
    }

    if (!ageRegex.test(ageInput.value)) {
        ageInput.classList.add('invalid');
        formIsValid = false;
    }

    if (formIsValid) {
        resultBlock.textContent = `First Name: ${firstNameInput.value}\nLast Name: ${lastNameInput.value}\nAge: ${ageInput.value}`;
    } else {
        resultBlock.textContent = 'Please check the form and correct errors.';
    }
});
document.querySelectorAll('.images a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`URL: ${link.getAttribute('href')}`);
    });
});
document.querySelectorAll('.images img').forEach(image => {
    let rotation = 0;
    image.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        rotation += 90; 
        image.style.transform = `rotate(${rotation}deg)`; 
    });
});


document.querySelectorAll('.links a').forEach(item => {
    item.addEventListener('mouseover', () => {
        if (!item.textContent.includes('(')) {
            item.textContent += ` (${item.getAttribute('href')})`;
        }
    });

    item.addEventListener('mouseout', () => {
        item.textContent = item.textContent.replace(` (${item.getAttribute('href')})`, '');
    });
});
