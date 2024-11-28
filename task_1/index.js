document.querySelectorAll('.images a').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        alert(`Link: ${anchor.href}`);
    });
});
document.querySelectorAll('.images img').forEach(img => {
    let angle = 0;
    img.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        angle += 90;
        img.style.transform = `rotate(${angle}deg)`;
    });
});
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.textContent += ` (${link.href})`;
    });
    link.addEventListener('mouseleave', () => {
        link.textContent = link.textContent.replace(` (${link.href})`, '');
    });
});

document.getElementById('userForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
    const demo = document.getElementById('demo');

    const namePattern = /^[a-zA-Z]{1,50}$/;
    const agePattern = /^[1-9][0-9]*$/;

    let isValid = true;

    // Reset invalid styles
    [firstName, lastName, age].forEach(input => input.classList.remove('invalid'));

    if (!namePattern.test(firstName.value)) {
        firstName.classList.add('invalid');
        isValid = false;
    }
    if (!namePattern.test(lastName.value)) {
        lastName.classList.add('invalid');
        isValid = false;
    }
    if (!agePattern.test(age.value)) {
        age.classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        demo.textContent = `First Name: ${firstName.value}\nLast Name: ${lastName.value}\nAge: ${age.value}`;
    } else {
        demo.textContent = 'Please fill out the form correctly.';
    }
});
