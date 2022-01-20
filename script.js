function createGrid(n) {
    const body = document.querySelector('body');
    const container = document.createElement('div');
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



createGrid(16);