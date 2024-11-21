let images1 = document.querySelectorAll('#task1 .eam_img-cont a img');
for (let i = 0; i < images1.length; i++) {
    images1[i].onclick = function (event) {
        event.preventDefault();
        alert(images1[i].parentNode.href);
    };
}

let images2 = document.querySelectorAll('#task2 .eam_img-cont img');
for (let i = 0; i < images2.length; i++) {
    images2[i].onclick = function (event) {
        event.preventDefault();
        let rotation = images2[i].style.transform;
        let angle = 90;
        if (rotation.includes('rotate')) {
            let currentAngle = parseInt(rotation.replace(/[^\d]/g, ''));
            angle = currentAngle + 90;
        }
        images2[i].style.transform = 'rotate(' + angle + 'deg)';
    };
}

let links = document.querySelectorAll('#task3 .eam_link-cont a');
for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
        links[i].innerHTML = links[i].innerHTML + ' (' + links[i].href + ')';
    };
    links[i].onmouseout = function () {
        links[i].innerHTML = links[i].innerHTML.replace(' (' + links[i].href + ')', '');
    };
}

let form = document.getElementById('userForm');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let age = document.getElementById('age');
let demo = document.getElementById('demo');

form.onsubmit = function (event) {
    event.preventDefault();

    let namePattern = /^[a-zA-Z]+$/;
    let agePattern = /^[0-9]+$/;

    if (!namePattern.test(firstName.value)) {
        firstName.style.border = '1px solid red';
    } else {
        firstName.style.border = '';
    }

    if (!namePattern.test(lastName.value)) {
        lastName.style.border = '1px solid red';
    } else {
        lastName.style.border = '';
    }

    if (!agePattern.test(age.value)) {
        age.style.border = '1px solid red';
    } else {
        age.style.border = '';
    }

    if (namePattern.test(firstName.value) && namePattern.test(lastName.value) && agePattern.test(age.value)) {
        demo.innerHTML = 'Імя: ' + firstName.value + '<br>' +
                         'Прізвище: ' + lastName.value + '<br>' +
                         'Вік: ' + age.value;
    }
};
