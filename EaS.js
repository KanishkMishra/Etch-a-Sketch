// create grid
function createGrid(size = 16) {
    const container = document.querySelector('.container');

    // remove previous grid
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    // create new grid squares
    for(let i = 0; i<(size**2); i++) {
        let box = document.createElement('div');

        box.classList.add('box');
        box.style.border = "1px solid black";

        container.appendChild(box);
    }

    container.style.gridTemplateColumns = "repeat(size, 1fr)";

    // establish hover event
    const grid = document.querySelectorAll('.box');

    grid.forEach(pixel => {
        pixel.addEventListener('mouseenter', ()=>{
            pixel.classList.add('hover');
        });
    });
}

createGrid();

// resize grid
const resize = document.querySelector('button');

resize.addEventListener('click', ()=>{
    let size = window.prompt("What width/length would you like? (max 100)");
    
    //ensure valid input
    while ((size<1) || (size>100)) {
        size = window.prompt("Please input a valid width/length? (max 100)");
    }

    createGrid(size);
});