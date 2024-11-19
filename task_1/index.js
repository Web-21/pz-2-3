// Image task: Alert on click, rotate on right-click
const images = document.querySelectorAll(".image-container img");

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault();
    const href = img.parentNode.getAttribute("href");
    alert(href);
  });

  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const currentRotation = img.style.transform.match(/rotate\((\d+)deg\)/);
    const newRotation = currentRotation ? +currentRotation[1] + 90 : 90;
    img.style.transform = `rotate(${newRotation}deg)`;
  });
});

const links = document.querySelectorAll(".links a");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const href = link.getAttribute("href");
    link.textContent += ` (${href})`;
  });

  link.addEventListener("mouseout", () => {
    const href = link.getAttribute("href");
    link.textContent = link.textContent.replace(` (${href})`, "");
  });
});

const form = document.getElementById("userForm");
const demo = document.getElementById("demo");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const age = document.getElementById("age");

  let isValid = true;

  if (!/^[A-Za-z]{1,50}$/.test(firstName.value)) {
    firstName.classList.add("invalid");
    isValid = false;
  } else {
    firstName.classList.remove("invalid");
  }

  if (!/^[A-Za-z]{1,50}$/.test(lastName.value)) {
    lastName.classList.add("invalid");
    isValid = false;
  } else {
    lastName.classList.remove("invalid");
  }

  if (!/^\d+$/.test(age.value) || parseInt(age.value) <= 0) {
    age.classList.add("invalid");
    isValid = false;
  } else {
    age.classList.remove("invalid");
  }

  if (isValid) {
    demo.innerHTML = `
      <p>First Name: ${firstName.value}</p>
      <p>Last Name: ${lastName.value}</p>
      <p>Age: ${age.value}</p>
    `;
  }
});
