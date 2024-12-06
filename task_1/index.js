document.querySelectorAll('.img-link img').forEach(img => {
    img.addEventListener('click', () => {
        alert(img.dataset.href);
    });

    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        img.classList.toggle('rotated');
    });
});

document.querySelectorAll('.just-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.textContent += ` (${link.href})`;
    });
    link.addEventListener('mouseleave', () => {
        link.textContent = link.textContent.replace(` (${link.href})`, '');
    });
});

const form = document.getElementById('userForm');
const demo = document.getElementById('demo');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
    let isValid = true;

    [firstName, lastName, age].forEach(input => input.classList.remove('invalid'));

    if (!/^[a-zA-Z]/.test(firstName.value)) {
        firstName.classList.add('invalid');
        isValid = false;
    }

    if (!/^[a-zA-Z]/.test(lastName.value)) {
        lastName.classList.add('invalid');
        isValid = false;
    }

    if (!/^\d+$/.test(age.value) || parseInt(age.value, 10) < 0) {
        age.classList.add('invalid');
        isValid = false;
    }

    if (isValid) {
        demo.textContent = `First Name: ${firstName.value}\nLast Name: ${lastName.value}\nAge: ${age.value}`;
    } else {
        demo.textContent = '';
    }
});
