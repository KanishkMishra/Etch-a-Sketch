// create grid squares
const container = document.querySelector('.container');

for(let i = 0; i<(16**2); i++) {
    let box = document.createElement('div');

    box.classList.add('box');
    box.style.border = "5px solid black";

    container.appendChild(box);
}