const img1 = document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const facebook = document.getElementById('facebook');
const tg = document.getElementById('tg');
const inst = document.getElementById('inst');
const facebookLink = document.getElementById('facebook-link');
const tgLink = document.getElementById('tg-link');
const instLink = document.getElementById('inst-link');
const nameInput = document.getElementById('name-input');
const surnameInput = document.getElementById('surname-input');
const ageInput = document.getElementById('age-input');
img1.addEventListener('click', alertFun);
img2.addEventListener('click', alertFun);
img3.addEventListener('click', alertFun);
img1.addEventListener('contextmenu', rotateFun);
img2.addEventListener('contextmenu', rotateFun);
img3.addEventListener('contextmenu', rotateFun);
facebook.addEventListener('mouseover', () => onlinkFun(facebookLink));
tg.addEventListener('mouseover', () => onlinkFun(tgLink));
inst.addEventListener('mouseover', () => onlinkFun(instLink));
facebook.addEventListener('mouseout', () => offlinkFun(facebookLink));
tg.addEventListener('mouseout', () => offlinkFun(tgLink));
inst.addEventListener('mouseout', () => offlinkFun(instLink));
nameInput.addEventListener('change', (event) => checkNameFun(event));
surnameInput.addEventListener('change', (event) => checkNameFun(event));
ageInput.addEventListener('change', (event) => checkAgeFun(event));

function alertFun() {
    alert('href');
}
function rotateFun(event) {
    event.preventDefault();
    let currentDegree = parseInt(this.getAttribute('data-degree')) || 0;
    currentDegree += 90;
    this.style.transform = `rotate(${currentDegree}deg)`;
    this.setAttribute('data-degree', currentDegree);
}
function onlinkFun(someLink) {
    someLink.style.display = 'block';
}
function offlinkFun(someLink) {
    someLink.style.display = 'none';
}
function checkNameFun(event) {
    let data = event.target.value;
    let regex = /[!@#$%^&*(),.?":{}|<>]/;
    if (regex.test(data)) {
        for (let i = 0; i < data.length; i++) {
            let char = data[i];
            if (regex.test(char)) {
                event.target.style.border = '3px solid red';
                alert(`${char} is abandon`);
            }
        }
    }
    else if (data.length > 50) {
        event.target.style.border = '3px solid red';
        alert(`max length is 50 letters`);
    }
    else if (data == '') {
        event.target.style.border = '1px solid black';
    }
    else {
        event.target.style.border = '3px solid green';
    }
}
function checkAgeFun(event) {
    let data = event.target.value;
    let regex = /-/;
    if (regex.test(data)) {
        event.target.style.border = '3px solid red';
        alert(`- is abandon`);
    }
    else if (data == '') {
        event.target.style.border = '1px solid black';
    }
    else {
        event.target.style.border = '3px solid green';
    }
}
