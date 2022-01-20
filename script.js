const body = document.querySelector('body');
const container = document.createElement('div');
const newGridButton = document.querySelector('#newGrid');
const clearGridButton = document.querySelector('#clearGrid');

function createGrid(n) {
    body.appendChild(container);
    container.classList.add('container');

    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

    for (i=0; i<n*n; i++) {
        const cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e) => {
            cell.classList.add('active');
        })
    }
}

function clearGrid() {
    const activeCells = document.querySelectorAll('.active');
    activeCells.forEach(e => e.classList.remove('active'));
}

function newGrid() {
    container.remove();
    let gridSize = prompt('Enter a grid size:');
    if (gridSize > 100) {
        prompt('Enter a grid size no larger than 100:');
    }
    createGrid(gridSize);
    }

newGridButton.addEventListener('click', newGrid);
clearGridButton.addEventListener('click', clearGrid);

window.onload = createGrid(16);