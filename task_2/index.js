const button = document.getElementById('button');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
button.addEventListener('click', changeFun);
let counter = 4;
function changeFun() {
    counter += 1;
    let current = counter % 3;
    switch(current){
        case 1: {
            text1.style.display = 'block';
            text2.style.display = 'none';
            text3.style.display = 'none';
            button.style.background = 'green';
            break;
        }
        case 2: {
            text1.style.display = 'none';
            text2.style.display = 'block';
            text3.style.display = 'none';
            button.style.background = 'red';
            break;
        }
        case 0: {
            text1.style.display = 'none';
            text2.style.display = 'none';
            text3.style.display = 'block';
            button.style.background = 'orange';
            console.log(current);
            break;
        }
    }
}