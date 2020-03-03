const gridBox = document.getElementById('gridbox');
const fragment = document.createDocumentFragment();
const resetButton = document.getElementById('reset');
const grayButton = document.getElementById('grayscale');
const rainbowButton = document.getElementById('rainbow');
const eraseButton = document.getElementById('erase');


/************** FUNCTIONS *************/
const fillGrid = (size) => {
    for (let i=0; i<size*size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('griditem');
        gridItem.addEventListener('mouseenter', ()=> {
            let grayScale = random256();
            gridItem.style.backgroundColor = `rgb(${grayScale}, ${grayScale}, ${grayScale})`;
        });
        fragment.appendChild(gridItem);
    }
    gridBox.appendChild(fragment);
}
const random256 = () => {
    return Math.floor(Math.random() * 256);
}
const colorRainbow = () => {
    let gridItems = [...document.querySelectorAll('.griditem')];
    gridItems.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = `rgb(${random256()}, ${random256()}, ${random256()})`;
        });
    });
}
const colorGray = () => {
    let gridItems = [...document.querySelectorAll('.griditem')];
    gridItems.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let grayScale = random256();
            element.style.backgroundColor = `rgb(${grayScale}, ${grayScale}, ${grayScale})`;
        });
    });
}
const removeGrid = () => {
    let gridItems = [...document.querySelectorAll('.griditem')];
    gridItems.forEach(element => {
        element.remove();
    });
}
const newGrid = (size) => {
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}
const erase = () => {
    let gridItems = [...document.querySelectorAll('.griditem')];
    gridItems.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = `#fff`;
        });
    });
}
/************** FIRST GRID *************/
fillGrid(16);

/************ EVENT LISTENERS **********/
resetButton.addEventListener('click',() => {
    removeGrid();
    let size
    do {
        size = parseInt(prompt('Introduce el número de celdas (2-64)'));
    } while (size<2 || size>64);
    newGrid(size);
    fillGrid(size);
});
rainbowButton.addEventListener('click', () => {
    colorRainbow();
});
grayButton.addEventListener('click', () => {
    colorGray();
});
eraseButton.addEventListener('click', () => {
    erase();
});