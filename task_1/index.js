document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`Image href: ${img.dataset.href}`);
  });

  img.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    let currentRotation = parseInt(img.dataset.rotation || '0');
    currentRotation = (currentRotation + 90) % 360;
    img.style.transform = `rotate(${currentRotation}deg)`;
    img.dataset.rotation = currentRotation;
  });
});

document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    if (!link.textContent.includes('(')) {
      link.textContent += ` (${link.href})`;
    }
  });
  link.addEventListener('mouseleave', () => {
    link.textContent = link.textContent.replace(`(${link.href})`, '');
  });
});

const form = document.getElementById('userForm');
const formNotification = document.getElementById('formNotification');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = form.firstName;
  const lastName = form.lastName;
  const age = form.age;

  [firstName, lastName, age].forEach(input => input.classList.remove('invalid'));

  let isValid = true;

  const nameRegex = /^[A-Za-z]{1,50}$/;
  if (!nameRegex.test(firstName.value)) {
    isValid = false;
    firstName.classList.add('invalid');
  }
  if (!nameRegex.test(lastName.value)) {
    isValid = false;
    lastName.classList.add('invalid');
  }

  const ageRegex = new RegExp("\\d+$");
  if (!ageRegex.test(age.value) || parseInt(age.value) <= 0) {
    isValid = false;
   console.log("age")
    age.classList.add('invalid');
  }

  if (isValid) {
    form.classList.remove('disable');
    formNotification.classList.add('enable');
    formNotification.innerHTML = `<p>Message</p><br>First name: ${firstName.value}<br>Last name: ${lastName.value}<br>Age: ${age.value}`;
  } else {
    formNotification.textContent = 'Please correct the errors in the form.';
  }
});
